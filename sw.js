self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/static/js/',
        '/static/css/',
        '/static/images/',
      ]);
    })
  );
});