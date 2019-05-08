self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/dist/web/20170920/',
        '/dist/web/js/',
        '/dist/web/css/20170920/',
        '/dist/web/images/',
        '/dist/web/fonts/'
      ]);
    })
  );
});