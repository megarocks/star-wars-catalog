importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.routing.registerRoute(
  new RegExp(/^https:\/\/swapi.co\/api/),
  new workbox.strategies.CacheFirst({ cacheName: 'swapi-cache', matchOptions: { ignoreVary: true } })
)
