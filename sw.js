self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/static/js/antd.js',
        '/static/js/jquery-3.1.1.min.js',
        '/static/css/index.css',
        '/static/images/dbc88cfeintro-img-2.jpg',
      ]);
    })
  );
});