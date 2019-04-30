var version = "1.0.3"
var CACHE_NAME = 'arttu-pennanen-org-cache-v'+version;
var urlsToCache = [
    './',
    './css/default.css',
    './js/main.js',
    './js/basicSroll.min.js'
];

var path = '/assets/content/content.json'

function loadJSON (path, callback) {
    fetch(path)
        .then(response => {
            return response.json()
        })
        .then(data => callback(data))
        .catch(() => null)
}


loadJSON(path, data => {
    data.projects.forEach(project => {
        urlsToCache.push(project.imgUrl)
    });
})

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    function (response) {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function (cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

self.addEventListener('activate', function(event) {
    var cacheWhitelist = [`arttu-pennanen-org-cache-v${version}`];
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });