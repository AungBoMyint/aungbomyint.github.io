'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eb47855cedf78fc2ff361133389d8f09",
"index.html": "63cea6bc3b523b98b747bba4cf31ffab",
"/": "63cea6bc3b523b98b747bba4cf31ffab",
"main.dart.js": "d2a7152f4ab174a0ed4e4a1578428537",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "812969c78b2a719242750d81547945fb",
"icons/Icon-192.png": "865830af2d62075a3200bc34d8bf93ce",
"icons/Icon-maskable-192.png": "865830af2d62075a3200bc34d8bf93ce",
"icons/Icon-maskable-512.png": "dfe6e0b63a2a63fcb910b37e93487fa6",
"icons/Icon-512.png": "dfe6e0b63a2a63fcb910b37e93487fa6",
"manifest.json": "a2a6c5dc7fb8c8dc8606a60624bd29db",
"assets/AssetManifest.json": "888bfd0f0b54873f6460c94ec1be6bb0",
"assets/NOTICES": "75692eaeed2f55d8a84740772bab0200",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/me.png": "e8a6b9443fe9a3d77faf7d0e76dd2402",
"assets/assets/rocket-person.png": "52609c8e9b552e8583f5d5f9ad9f1269",
"assets/assets/image/java-script.png": "d9de75e5bf3a7b0ef2a48321acc06e88",
"assets/assets/image/xcode.png": "fe1228ec2d4f80b5dbe8028ac38374f4",
"assets/assets/image/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/image/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/image/sql.png": "06f8964a0d38ab91aabbeae875e0a1ca",
"assets/assets/image/firebase.png": "45ec5c8523c42019e2aa9fe5436750af",
"assets/assets/image/java.png": "e517d77fb08cdba09347086cc81ea4ff",
"assets/assets/image/android_studio.png": "a803e97a7dc10b7037ed2fff7253a9e1",
"assets/assets/image/node.png": "1d4db9ea7c0bacdd98408a1677eb2db3",
"assets/assets/image/django.png": "02711c2cf037c786ebb844af1328f809",
"assets/assets/image/swift.png": "a418b2576326942bb89be50bdc13c537",
"assets/assets/image/digital_ocean.png": "2f74522daeca33e430f4c37538a06cf3",
"assets/assets/image/html-5.png": "945d8320b2991e7345ea0dda5ee1b6bb",
"assets/assets/image/css-3.png": "b848d5d9bb221592064de0f356f61676",
"assets/assets/image/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/image/mongodb.png": "d5054ba82120d64c99afb15c6f883c76",
"assets/assets/my-pic.png": "c2f4376feabb2216f8d794f8c3cb06e6",
"assets/assets/computer.png": "905075a6a0861dfe9b91cb827a8b492d",
"assets/assets/icon/instagram.png": "f37a3033aa82397f603fa816c59d1d3f",
"assets/assets/icon/horizontal-bars.png": "d844e547bfae6dad9afc2b8ff692c27a",
"assets/assets/icon/atom.png": "83dd6cde27f27a832cf7fc92ea219065",
"assets/assets/icon/facebook-messenger.png": "3f4a06ab6b088685d00c98e1f8a18e39",
"assets/assets/icon/line.png": "1e7b30b9607ef15f4c7ac5aa8ac2d489",
"assets/assets/icon/whatsapp.png": "2410867e36e87f6720563c12e59993c0",
"assets/assets/icon/facebook.png": "7360ffe3672898b3df4896f0e1128c22",
"assets/assets/shwethirikhit.png": "4ec348ceaa345a09f58de08449d650d5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
