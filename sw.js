self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('test_v1').then(cache => {
      return cache.addAll([
        '/serviceworker/static/js/jquery-3.1.1.min.js',
        '/serviceworker/static/css/index.css',
        '/serviceworker/static/images/dbc88cfeintro-img-2.jpg',
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
  console.log(caches.match(url.pathname))
  if(url.origin == location.origin && /.(js|css|jpg|png)$/.test(url.pathname)) {
    e.respondWith(caches.match(url.pathname))
  }
})