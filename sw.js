var version = "1.3.01"
var CACHE_NAME = 'arttu-pennanen-org-cache-v' + version;
var urlsToCache = [
    '/',
    './css/default.css',
    './js/main.js',
    './js/basicScroll.min.js',
    './assets/font/inter/Inter-Regular.woff2',
    './assets/font/inter/Inter-Medium.woff2',
    './assets/font/inter/Inter-Bold.woff2',
    './assets/font/inter/Inter-ExtraBold.woff2'
];

var contentPath = '/assets/content/content.json'

function loadJSON(path, callback) {
    fetch(path)
        .then((response) => {
            return response.json()
        })
        .then((data) => { callback(data) })
        .catch(() => { null })
}


loadJSON(contentPath, data => {
    data.projects.forEach(project => {
        urlsToCache.push(project.imgUrl)
    });
})

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.match('\/sub\/?$')) {
        return false;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    (response) => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

self.addEventListener('activate', (event) => {
    var cacheWhitelist = [`arttu-pennanen-org-cache-v${version}`];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});