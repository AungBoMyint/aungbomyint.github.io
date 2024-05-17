'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eb47855cedf78fc2ff361133389d8f09",
"index.html": "3b52ccf2899e4610c8056247fd525b66",
"/": "3b52ccf2899e4610c8056247fd525b66",
"main.dart.js": "6ddaf969848c79b28f2176a35bba4677",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "812969c78b2a719242750d81547945fb",
"icons/Icon-192.png": "865830af2d62075a3200bc34d8bf93ce",
"icons/Icon-maskable-192.png": "865830af2d62075a3200bc34d8bf93ce",
"icons/Icon-maskable-512.png": "dfe6e0b63a2a63fcb910b37e93487fa6",
"icons/Icon-512.png": "dfe6e0b63a2a63fcb910b37e93487fa6",
"manifest.json": "a2a6c5dc7fb8c8dc8606a60624bd29db",
".git/config": "8ebbc919a5fca1fddf9714794d0ce8f3",
".git/objects/61/063511094bd8bd27445b6027287a3f6675e8c7": "c134e1b4f9aa5707f5e171f67767478c",
".git/objects/95/4ace06405a67b983fd95d1ede64d00da4d48d0": "e5af0bdf62899139cdc58d90e68859d8",
".git/objects/66/b523deb9c0e7b24e3de56a77a87195731868fa": "b1bcd10b63e77a8b47a5003eaf9caf53",
".git/objects/3b/63e50b074d08a01f759ef9cddcc9c082b5393f": "ec464d9a16aa986ac51294ecc50e676d",
".git/objects/03/f20f6a5504ac5e4be83cfbfc2db8e67c3107dd": "eb1a8d42ee3ed20c70021e4887f4552f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/170d3513f2bf96c6601c77803b26c2489e913f": "31dc4ec759a23d5ec0ec95c1e199cbfd",
".git/objects/51/8be814829520027a1808c5d9775ed8b3c77639": "4b813ea34c2336f4a57cc68932cb89d9",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/5f/2157a44b8bf04a5aeb671f2c26293f0991694a": "5a5fea2ea07d767015e11018d991f813",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bb/9a2a7b331b5ab10a4f109bfddb085e6141c6b9": "f6fb1e6bdaa7fd7483a72807f9faaf8f",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/da/c1b165b52852111b46694afa62e328f626489f": "bf41d320836c601edb705a8d20695c59",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/55f50c840998a95e3c4df7168b1d50b8d91ca6": "802e38ef4609150d81c98e4feab4cf3c",
".git/objects/fc/57aa1f0c0791ba2b3c6eb778d3c7f70bf3da62": "c3284524c35706d93f881a8fc826437a",
".git/objects/e3/b3d5ab172b61ed1847bdd24d2b792ffcc1b737": "d9c323b24e7e95c1e666ca9ffa332dc4",
".git/objects/e4/c623c747c68e8b4ed065ef0bcbe5052cbcd357": "86a9f997958a7a62127944764f0fd0d7",
".git/objects/c8/7fcf94d8ac3379396e5e83bc1be2caa0a530b1": "73d1fbd3f1b2ea094a33ebde28c724f3",
".git/objects/c6/d847f9f8127734a7d4783190b7e16c5c70eaa7": "0921915e8f93029a8d8c77150414588c",
".git/objects/ec/ecd8dec80699b65cfdda38ea78a08444298028": "f332691d290484ef7f4b5e81ee74b656",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/42/f4bb36f29405ed975d725fb267342c7fc81112": "a5199b34f04846e3d180287137a6ee0f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/bc6658d23ffd5404edee891cade811c6dffe77": "1087787cc6e3e9cc6f16b90cc7431969",
".git/objects/1a/b66cf70d4744875ec65aa618f85e263671f858": "ed4155eed11ea909e3dcc394a4a42f75",
".git/objects/10/bd2167cd24ea497740f5cb1a885d991ba1fdbf": "a9102f55d6e3acf54ee33975b23d4918",
".git/objects/81/f211ce67962f5a55339b9e8b74cbc21cfb3d5c": "00110a02c6f45f524ce068ff649b7dcf",
".git/objects/86/d3df29807e5b9b81bf9fef20c00bf66f2a5eb5": "06a6920cebcb1e6ebe54a7a66cda6d2a",
".git/objects/72/d37b29e65ff6c019664ea615a1bd0bf8070141": "4ba1af4748357f26eaa4e7db62bbc54a",
".git/objects/44/c23c41433fc35ab3283fc357dc6b8da30d1f5e": "b835643bf5971e9d7ff61b220477d975",
".git/objects/07/81d4e19a65cdffb5f33641e0e5f805c7f361b3": "134aef984dfa2dfd4067e5f3105be4bb",
".git/objects/5c/a5222075094dea7e36304cdf28d48575872c57": "e67f60e36fd75c27fd8c08557a7b896e",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/53/0e7cfb98c669b3e58868e0ca351fd8218d315a": "f1a5287a9e3092809a103ef4804409e5",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/52/428e6334e55a78728c429f4bfbb6a64cec97f9": "e990e66a44fcb4fd7bcca2d6d3814c07",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0a/a60f01d08d584eba78696f1d878b0de8a5a2d4": "957aa44ba28fc4955c44600ac58a0311",
".git/objects/d4/7c16881aa5f45d39fe1bda414cd4feb0e7aa38": "ac88e3ba1f06a6c7448bdbefc0e7d64a",
".git/objects/b1/5b843742e02119b6313a971d0652e5eb32dd75": "f019450fb28d6f11f54a0319a0b994a2",
".git/objects/b1/8add38c4264bf3ef6c203974abb7e7e3215d37": "a8951c9e1ecaaf7d36342abfa31e63dc",
".git/objects/a9/f0d0c8e27d14b65e33e16ccdeaf1576270f238": "50116c4e32148fb6329894ddc06f4541",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/db/14349e30db77acc210612cf3c684054bd1d93f": "5ce9378e880f32f55106d2b795779ea1",
".git/objects/de/ddc7a786be821c2daf5099b1dc798b8aecc02f": "89713d19a06221c2f810e17293b1aef8",
".git/objects/a6/b0db3a8810006bd52b2b97fe6223bc039522ce": "eec8a41171ac039fa5e98223537882b1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/fde121c24452535f20291cfd35b60bf75ea94e": "60f124fc01da365e24725fe8bef9a6a4",
".git/objects/c4/200ce3cb4f2c089add1d6d6ab87ff2026c02ed": "ae48a87577fbb1f956dd9a4c5cb5c64e",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/c2/8e4bc1cab2c120efd95f3222603c5308c58367": "245c1cf9738b48a535dcbd296b43366a",
".git/objects/46/51aa52daed6aa39d41f726fb4170dc7ceeacf1": "52f1583638fcefd1a8439c621dca5088",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/30437c884674177fed0f2c58977a169584e15b": "862c55224702ca269e3bd149f4ef1dfe",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/49/bc1447aec25f07232fbdcff0443250110a5266": "a029263e5fdf98ee40cfcde9b02be9d6",
".git/objects/2e/1251e17d20dbf3d2d69ef324aa6454fdecebae": "729d0a9bac5215725675959919c41dc4",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/objects/8e/935563f0b72dca0e9c9a2f945e2d68af20af93": "66d9712e73246d359c02f773a3ce50e6",
".git/objects/22/4d5977773e58a548590928da6d55b7da9adf5e": "91530e0442faf0dededbfa90525780ae",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3340e61e3938f0173fc9c25080dbf54e",
".git/logs/refs/heads/main": "3340e61e3938f0173fc9c25080dbf54e",
".git/logs/refs/remotes/origin/main": "c358af23deb4c8971f2170f7dac2c524",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "07e6ae0250bdedb9ecbfe7d5019ff366",
".git/refs/remotes/origin/main": "07e6ae0250bdedb9ecbfe7d5019ff366",
".git/index": "75a17d7c1424f631426393636de633ec",
".git/COMMIT_EDITMSG": "f5966cddbf66a88bc1839ccbf6d09953",
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
