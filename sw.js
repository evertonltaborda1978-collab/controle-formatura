// Service Worker básico para PWA
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Permite que o app funcione requisições normais
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
