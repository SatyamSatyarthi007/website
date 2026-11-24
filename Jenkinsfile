pipeline {
    agent any

    triggers {
        githubPush()
    }

    options {
        timestamps()
        disableConcurrentBuilds()
        skipStagesAfterUnstable()
    }

    environment {
        COMPOSE_DOCKER_CLI_BUILD = '1'
        DOCKER_BUILDKIT = '1'
    }

    stages {
        stage('Validate') {
            steps {
                sh 'docker compose config --quiet'
            }
        }

        stage('Build and Lint') {
            steps {
                sh '''
                    docker compose build website
                    docker compose run --rm --no-deps website npm run lint
                    docker compose run --rm --no-deps -e NODE_ENV=production website npm run build
                '''
            }
        }

        stage('Smoke Test') {
            steps {
                sh '''
                    docker compose up -d --build website

                    for attempt in $(seq 1 30); do
                        if curl --fail --silent --show-error http://127.0.0.1:3000 >/dev/null; then
                            echo "Website is responding on port 3000"
                            exit 0
                        fi
                        sleep 2
                    done

                    echo "Website did not become ready"
                    docker compose logs website
                    exit 1
                '''
            }
        }
    }

    post {
        always {
            sh 'docker compose down --remove-orphans || true'
            sh 'docker compose rm -vf || true'
        }
        success {
            echo 'Jenkins pipeline completed successfully.'
        }
        failure {
            echo 'Jenkins pipeline failed. Review the stage logs above.'
        }
    }
}
