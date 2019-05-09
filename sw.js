self.addEventListener('install', e => {
  e.waitUntil(
    Promise.all([
      caches.open('v2').then(cache => {
        return cache.addAll([
          '/serviceworker/static/js/jquery-3.1.1.min.js',
          '/serviceworker/static/css/index.css',
          '/serviceworker/static/images/dbc88cfeintro-img-2.jpg',
        ]);
      }),
      // 清理旧版本
      caches.keys().then(cacheList => {
        return Promise.all(
          cacheList.map(cacheName => {
            if(cacheName != 'v2') {
              console.log('清理', cacheName);
              return caches.delete(cacheName);
            }
          })
        )
      })
    ])
  );
});

self.addEventListener('activate', e => {
  console.log('v1 no ready to handle fetches!')
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if(url.origin == location.origin && /.(js|css|jpg|png)$/.test(url.pathname)) {
    e.respondWith(caches.match(url.pathname))
  }
})