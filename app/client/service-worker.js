const doCache = process.env.env === 'prod';

// Name our cache
const CACHE_NAME = 'my-pwa-cache-v1';

// Delete old caches that are not our current one!
self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(keyList =>
                Promise.all(keyList.map(key => {
                    if (!cacheWhitelist.includes(key)) {
                        console.log('Deleting cache: ' + key)
                        return caches.delete(key);
                    }
                }))
            )
    );
});
// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function(event) {
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function(cache) {
                    // Get the assets manifest so we can see what our js file is named
                    // This is because webpack hashes it
                    const urlsToCache = [
                        '/',
                        'manifest.js',
                        'vendor.js',
                        'bundle.js',
                        'style.css'
                    ]
                    cache.addAll(urlsToCache)
                    console.log('cached');
                })
        );
    }
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function(event) {
    if (doCache) {
        event.respondWith(
            caches.match(event.request).then(response => response || fetch(event.request))
        );
    }
});
