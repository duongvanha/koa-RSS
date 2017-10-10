const doCache = process.env.env === 'prod';

// Name our cache
const CACHE_NAME     = 'my-pwa-cache-v' + process.env.version;
const cacheWhitelist = [CACHE_NAME];

// Delete old caches that are not our current one!
self.addEventListener("activate", event => doCache && event.waitUntil(clearCache()));

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', event => doCache && event.waitUntil(addCache()));

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function (event) {
    if(doCache) {
        event.respondWith(
            caches.match(event.request).then(response => response || fetch(event.request))
        )
    }
});

async function clearCache() {
    const keyList = await caches.keys();
    console.log('keylist', keyList);
    return Promise.all(keyList.map(key => !cacheWhitelist.includes(key) &&
        (console.log('Deleting cache: ' + key) || caches.delete(key))))
}

async function addCache() {
    await clearCache();
    const cache       = await caches.open(CACHE_NAME);
    const urlsToCache = [
        '/',
        'manifest.js',
        'vendor.js',
        'bundle.js',
        'style.css'
    ];
    cache.addAll(urlsToCache);
    console.log('cached');
}
