
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