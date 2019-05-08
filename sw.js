self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/static/js/jquery-3.1.1.min.js',
        '/static/css/index.css',
        '/static/images/dbc88cfeintro-img-2.jpg',
      ]);
    })
  );
});

self.addEventListener('activate', e => {
  console.log('v1 no ready to handle fetches!')
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  console.log(url)
  console.log(caches)
  e.respondWith(caches.match(url.pathname))
})