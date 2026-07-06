// Stand-in for the Claude-artifact `window.storage` API, backed by the
// browser's own localStorage. Same method names/shapes, so the app code
// that was written for the artifact environment works unchanged here.
//
// Note: localStorage is per-browser, per-device — there's no cross-device
// sync. Data persists until the user clears their browser data or you
// swap this out for a real backend (Supabase, Firebase, your own API, etc).

const PREFIX = 'student-notebook:';

function makeStorage() {
  return {
    async get(key) {
      try {
        const raw = localStorage.getItem(PREFIX + key);
        if (raw === null) return null;
        return { key, value: raw, shared: false };
      } catch (e) {
        return null;
      }
    },
    async set(key, value) {
      try {
        localStorage.setItem(PREFIX + key, value);
        return { key, value, shared: false };
      } catch (e) {
        console.error('storage.set failed', e);
        return null;
      }
    },
    async delete(key) {
      const existed = localStorage.getItem(PREFIX + key) !== null;
      localStorage.removeItem(PREFIX + key);
      return { key, deleted: existed, shared: false };
    },
    async list(prefix = '') {
      const fullPrefix = PREFIX + prefix;
      const keys = Object.keys(localStorage)
        .filter((k) => k.startsWith(fullPrefix))
        .map((k) => k.slice(PREFIX.length));
      return { keys, prefix, shared: false };
    },
  };
}

if (typeof window !== 'undefined' && !window.storage) {
  window.storage = makeStorage();
}
