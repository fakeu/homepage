/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/avatar.jpg",
    "revision": "262186108c0b3583163036ec158df423"
  },
  {
    "url": "images/icons/16x16.png",
    "revision": "b85b0d01ca0b22430da12dbc3a9c2730"
  },
  {
    "url": "images/icons/192x192.png",
    "revision": "3c3061ed797e20bab6927f35c8caa252"
  },
  {
    "url": "images/icons/32x32.png",
    "revision": "50f973a7a335436f4c7b553b92e3f919"
  },
  {
    "url": "images/icons/512x512.png",
    "revision": "09e49e179fe06121e02f6182850f3255"
  },
  {
    "url": "images/icons/favicon.ico",
    "revision": "c6d7eafc9f94f76667e911507b97ff0b"
  },
  {
    "url": "images/og_image.jpg",
    "revision": "863c62a0505779c408b1fc0ee9c22b2a"
  },
  {
    "url": "index.html",
    "revision": "a229e39ed30f1afb71283c87b40fac27"
  },
  {
    "url": "styles/base.css",
    "revision": "8da844af205a4ae9bece63ff1c1abb09"
  },
  {
    "url": "styles/style.css",
    "revision": "8c945e98082cb59119ff56abaf647b2d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
