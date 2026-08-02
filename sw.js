const CACHE_NAME = 'croazia-2026-v11';
const APP_SHELL = [
  './?v=11',
  './index.html?v=11',
  './styles.css?v=11',
  './cloud-config.js?v=11',
  './vendor/supabase.js?v=11',
  './app.js?v=11',
  './manifest.webmanifest?v=11',
  './assets/app-icon.svg',
  './Croazia%202026.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  const isAppFile = event.request.mode === 'navigate' || /\.(?:js|css|webmanifest)$/.test(url.pathname);
  const networkRequest = isAppFile ? new Request(event.request, { cache: 'no-store' }) : event.request;

  event.respondWith(
    fetch(networkRequest).then(response => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(() =>
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        if (event.request.mode === 'navigate') return caches.match('./index.html?v=11');
        throw new Error('Risorsa non disponibile offline');
      })
    )
  );
});
