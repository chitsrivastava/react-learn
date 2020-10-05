var CACHE_STATIC_NAME = 'static-v24';
var CACHE_DYNAMIC_NAME = 'dynamic-v2';
var STATIC_FILES = [
  '/',
  '/index.html',
  '/offline.html',
  '/src/js/app.js',
  '/src/css/app.css',
  '/src/images/main-image.jpg',
];

self.addEventListener('install', function (event) {
  //added to prevent manually clicking "skipWaiting" when sw was updated  

  self.skipWaiting();

  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function (cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll(STATIC_FILES);
      })
  )
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('[Service Worker] Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});

function isInArray(string, array) {
  var cachePath;
  if (string.indexOf(self.origin) === 0) { // request targets domain where we serve the page from (i.e. NOT a CDN)
    console.log('matched ', string);
    cachePath = string.substring(self.origin.length); // take the part of the URL AFTER the domain (e.g. after localhost:8080)
  } else {
    cachePath = string; // store the full request (for CDNs)
  }
  return array.indexOf(cachePath) > -1;
}

self.addEventListener('push', function(e) {
  var options = {
    body: e.data.text(),
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Open Application',
        },
      {action: 'close', title: 'Close',
        },
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Welcome to JDF!', options)
  );
});


self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  var action = event.action;
  console.log(action)

  if(action==='close'){
    event.notification.close();
  }
  else{
  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == 'http://localhost:3000/login' && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('http://localhost:3000/login');
  }));
}

});
// self.addEventListener('push',event=>{
// console.log(event.data.text());
// self.navigator.serviceWorker.ready.then(reg=>{
//   reg.showNotification(event.data.text())
// })
// })

self.addEventListener('fetch', function (event) {
console.log('insite sw fetch' );
});

self.addEventListener('sync', function(event) {
  console.log('inside sw sync ');
});
