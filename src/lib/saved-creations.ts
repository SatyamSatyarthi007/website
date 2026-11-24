export const SAVED_CREATIONS_KEY = "vauclaire-saved-creations";
export const RECENTLY_VIEWED_KEY = "vauclaire-recently-viewed";

export function readCreationIds(key: string): string[] {
  try {
    const value = window.localStorage.getItem(key);
    const ids = value ? JSON.parse(value) : [];
    return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function writeCreationIds(key: string, ids: string[]) {
  window.localStorage.setItem(key, JSON.stringify(ids));
  window.dispatchEvent(new CustomEvent("vauclaire-storage-change"));
}
