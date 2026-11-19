// Atelier Vauclaire — Brand Configuration & Settings
// Easy-to-edit centralized parameters for brand identity, contact, checkout, and SEO.

export const BRAND_CONFIG = {
  name: "VAUCLAIRE",
  fullName: "Atelier Vauclaire",
  tagline: "Fine Jewellery & Bespoke Horology",
  subheading: "Geneva · Paris · New York",
  description:
    "An independent bespoke maison dedicated to singular high jewellery rings, haute horlogerie timepieces, and hand-saddle-stitched leather straps.",
  url: "https://vauclaire-atelier.example", // Replace with your production domain
  year: 2026,
  
  // Atelier Locations & Concierge
  concierge: {
    email: "concierge@vauclaire-atelier.example",
    phone: "+41 22 819 04 20",
    hours: "Monday – Saturday, by private appointment only",
    addresses: [
      {
        city: "Genève",
        label: "Flagship Atelier",
        address: "14 Rue du Rhône, 1204 Genève, Switzerland",
      },
      {
        city: "Paris",
        label: "Private Salon",
        address: "28 Place Vendôme, 75001 Paris, France",
      },
      {
        city: "New York",
        label: "Consultation Suite",
        address: "745 Fifth Avenue, New York, NY 10151, USA",
      },
    ],
  },

  // Social & Editorial Channels
  social: {
    instagram: "https://instagram.com/vauclaire_atelier",
    pinterest: "https://pinterest.com/vauclaire_atelier",
    linkedin: "https://linkedin.com/company/vauclaire-atelier",
  },

  // Checkout Provider Note
  // Since no payment processor is configured out of the box, specify your default external checkout URL
  // e.g., Stripe Payment Link, Shopify Buy Button link, or Bespoke Invoice Portal.
  checkoutProvider: {
    name: "External Concierge Checkout",
    defaultPlaceholderUrl: "https://checkout.stripe.com/c/pay/placeholder-vauclaire-bespoke",
    isConfigured: false, // Set to true once you paste your real payment links
    setupDocumentationUrl: "/about#bespoke-process",
  },

  // Contact Form Provider
  // In production, point this to your Formspree, Resend, or SendGrid webhook.
  contactForm: {
    provider: "Client-Side Demonstration Mode",
    endpointUrl: "", // e.g. "https://formspree.io/f/your_form_id"
    isConfigured: false,
  },
};
