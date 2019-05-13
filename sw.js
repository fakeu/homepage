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
    "url": "images/icons/32x32.png",
    "revision": "50f973a7a335436f4c7b553b92e3f919"
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
    "revision": "3d39e01684f4002ee254725b4fa7c83b"
  },
  {
    "url": "styles/base.css",
    "revision": "8da844af205a4ae9bece63ff1c1abb09"
  },
  {
    "url": "styles/style.css",
    "revision": "415fb8b41ca05e127b39301e9f9676bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
