// ===== service-worker.js =====
const cacheName = 'krish-furnishing-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',

  // 13 Tools
  '/tools/sofapuffy.html',
  '/tools/wallpaper.html',
  '/tools/bhartiyabaithak.html',
  '/tools/artificialgrass.html',
  '/tools/bedback.html',
  '/tools/blinds.html',
  '/tools/carpet.html',
  '/tools/curtaintrack.html',
  '/tools/curtains.html',
  '/tools/mattress.html',
  '/tools/sofa.html',
  '/tools/sofateapoy.html',
  '/tools/invoicefinal.html',

  // Sample gallery images (replace with your actual images)
  '/images/gallery/img1.jpg',
  '/images/gallery/img2.jpg',
  '/images/gallery/img3.jpg',
  '/images/gallery/img4.jpg',

  // Icons
  '/images/icons/icon-72.png',
  '/images/icons/icon-96.png',
  '/images/icons/icon-128.png',
  '/images/icons/icon-144.png',
  '/images/icons/icon-152.png',
  '/images/icons/icon-192.png',
  '/images/icons/icon-384.png',
  '/images/icons/icon-512.png'
];

// ===== Install Event =====
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker] Caching files');
      return cache.addAll(filesToCache);
    })
  );
});

// ===== Activate Event =====
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// ===== Fetch Event =====
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});