/* This service worker provides no purpose whatsoever other than to delete old caches created by previous service worker iterations.*/
self.addEventListener('install', (event) => {
    event.waitUntil(caches.keys()
        .then(keys => Promise.all(keys.map(key => {
            if (key.startsWith("arttu-pennanen-org-cache-v")) {
                return caches.delete(key);
            }
        }))))
});

self.addEventListener('fetch', (event) => {
    event.waitUntil(caches.keys()
        .then(keys => Promise.all(keys.map(key => {
            if (key.startsWith("arttu-pennanen-org-cache-v")) {
                return caches.delete(key);
            }
        }))))
});

self.addEventListener('activate', event => {
    event.waitUntil(caches.keys()
        .then(keys => Promise.all(keys.map(key => {
            if (key.startsWith("arttu-pennanen-org-cache-v")) {
                return caches.delete(key);
            }
        }))))
});