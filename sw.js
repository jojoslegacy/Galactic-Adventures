const CACHE = 'galactic-academy-learning-v32';
const FILES = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'content/rnd.js',
  'content/academy-extras.js',
  'content/math.js',
  'content/phonics.js',
  'content/geography.js',
  'content/spanish.js',
  'content/civics.js',
  'content/science.js',
  'content/advanced.js',
  'content/diagrams.js',
  'content/expand.js',
  'manifest.webmanifest',
  'icons/icon-256.png',
  'icons/icon-512.png',
  'og.png'
];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match('./index.html'))
      )
  );
});
