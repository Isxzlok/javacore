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
    "url": "404.html",
    "revision": "36dcccbe3863af229ec1d7fd7aa99db2"
  },
  {
    "url": "advanced/index.html",
    "revision": "58d089acdeb7f875c97e1ff4dacc6fb3"
  },
  {
    "url": "advanced/java-code-style.html",
    "revision": "9ba7b19368cfe2b3d730eb0b5bca30c6"
  },
  {
    "url": "advanced/java-crypto.html",
    "revision": "862ea5b07d96129bc44e0488ab3b1ad8"
  },
  {
    "url": "advanced/java-locale.html",
    "revision": "c35b10bd155fdbe3f2f890972341364e"
  },
  {
    "url": "advanced/java-regex.html",
    "revision": "bc57992dc2636bd2cc59904e4ad26ccd"
  },
  {
    "url": "advanced/jdk8.html",
    "revision": "2ff0909bbeec1047d99d5fa8a77aab08"
  },
  {
    "url": "assets/css/0.styles.176fb106.css",
    "revision": "d8d2d2ff27d5de68ac950552f756fc9e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17c631ac.js",
    "revision": "d79a71cba2a986e5123b47bba256eee4"
  },
  {
    "url": "assets/js/11.83671296.js",
    "revision": "249b6fe73f375af12473758751c7c98b"
  },
  {
    "url": "assets/js/12.5db40b2b.js",
    "revision": "caf463bef88f20e31c241bb86c1c54b3"
  },
  {
    "url": "assets/js/13.e79e32de.js",
    "revision": "7a515bc74121938e9bb64d0eb18baf15"
  },
  {
    "url": "assets/js/14.5f83b366.js",
    "revision": "5d535bfcafa6cb1518fba8b6cc7dd322"
  },
  {
    "url": "assets/js/15.eb6eb877.js",
    "revision": "306b5f550a4734145334c16faef65d61"
  },
  {
    "url": "assets/js/16.233748a0.js",
    "revision": "9dc495a32828d6861b9370295bbb5255"
  },
  {
    "url": "assets/js/17.64e2a0a5.js",
    "revision": "e9e205cad32780ca6d87ecd092598f06"
  },
  {
    "url": "assets/js/18.f1589805.js",
    "revision": "4f3430f9c53b33a2bd740e5b52e4b18f"
  },
  {
    "url": "assets/js/19.a5bf3505.js",
    "revision": "15c3b17599bbf8b6f128b6a3feb3a639"
  },
  {
    "url": "assets/js/20.577dd87a.js",
    "revision": "b70e1fdccd5b9e4375057eadd009043a"
  },
  {
    "url": "assets/js/21.d45f5d3d.js",
    "revision": "d3b7d8ed756b239b43a57ba30c9f01bc"
  },
  {
    "url": "assets/js/22.f58954c0.js",
    "revision": "670273bbbb1e033ec99242df0014ccdb"
  },
  {
    "url": "assets/js/23.179a043f.js",
    "revision": "b2a01dfb1fdd98167291f4facef57abf"
  },
  {
    "url": "assets/js/24.e0bf030f.js",
    "revision": "366a8fc1963bc103b1028b25c3ef26c4"
  },
  {
    "url": "assets/js/25.55066b06.js",
    "revision": "2f7fad52862263dc3b42d2208398c4a0"
  },
  {
    "url": "assets/js/26.29ff696d.js",
    "revision": "3ded04c4fb13896202ae79aa28bc7d47"
  },
  {
    "url": "assets/js/27.cc0645a9.js",
    "revision": "96c2ad141d18b5cfd9b1344340834c2c"
  },
  {
    "url": "assets/js/28.64aec5df.js",
    "revision": "6573d0ad496c37bac63858edefa3967a"
  },
  {
    "url": "assets/js/29.c2972991.js",
    "revision": "44d393c35c154ee33e1aa51ae74c3ee7"
  },
  {
    "url": "assets/js/30.ef0a1d72.js",
    "revision": "c53d93ea0c610cae51fe7c3d09f08298"
  },
  {
    "url": "assets/js/31.bfa3fc2e.js",
    "revision": "0844b01af81bf88f0939fae350d5d25b"
  },
  {
    "url": "assets/js/32.16f1d764.js",
    "revision": "76516a6566d84f6a24f9e1b5e2dfedf7"
  },
  {
    "url": "assets/js/33.db9a01fa.js",
    "revision": "71c8c1aa45a3b7ae8435672d9c16efd8"
  },
  {
    "url": "assets/js/34.d7e950fb.js",
    "revision": "75300b48e6b7abbf4ea55f2daf12bb16"
  },
  {
    "url": "assets/js/35.1183ad4f.js",
    "revision": "d4e98dbd2dc8d822d0b26bb8cbf39503"
  },
  {
    "url": "assets/js/36.db8da093.js",
    "revision": "b37db6e72a4a3ee3a52f4188b19cdc9a"
  },
  {
    "url": "assets/js/37.8f16d193.js",
    "revision": "d6e309afc9a1a067ec828935e9e2dfcf"
  },
  {
    "url": "assets/js/38.7b68102d.js",
    "revision": "871cd09557df2fd9b0872669340d8382"
  },
  {
    "url": "assets/js/39.5dd9f284.js",
    "revision": "7476abbdcf68613702f53cfe5b3963f3"
  },
  {
    "url": "assets/js/4.b48ce58b.js",
    "revision": "8c3b30cf3f0061bf879fe6a7dedeb003"
  },
  {
    "url": "assets/js/40.07dd733e.js",
    "revision": "74aab3d7ef92d2af4b273106e1d6e118"
  },
  {
    "url": "assets/js/41.b4647b8a.js",
    "revision": "77f27298f9be90ae51d04fd6694e6ff9"
  },
  {
    "url": "assets/js/42.92b3e9f2.js",
    "revision": "04546a7ed0856188fb6370d7df297e65"
  },
  {
    "url": "assets/js/43.cb404d35.js",
    "revision": "ddf7b1548578259b137e967264bfaee2"
  },
  {
    "url": "assets/js/44.c41f9803.js",
    "revision": "c231b4623788a6fa6249001120ffe910"
  },
  {
    "url": "assets/js/45.be9bdea4.js",
    "revision": "e2227e1308c2114ed8c2fdb9b087c4f1"
  },
  {
    "url": "assets/js/46.95499528.js",
    "revision": "0c754fdb921129ca5143ac42db0043d9"
  },
  {
    "url": "assets/js/47.78c3b9d0.js",
    "revision": "939e86fbd2057e67b1c7e6bfee4f7e7d"
  },
  {
    "url": "assets/js/48.29cbfb97.js",
    "revision": "db17aad5aeff54a0b248ab00231ac0c1"
  },
  {
    "url": "assets/js/49.02c5ef2e.js",
    "revision": "06e679d574b219ced755483b1dee5859"
  },
  {
    "url": "assets/js/5.62db1143.js",
    "revision": "dc4ca790d008d52bc9dfc1954ae0e704"
  },
  {
    "url": "assets/js/50.dbd3d124.js",
    "revision": "03ed3fe23f57444eddd46387b7209d7c"
  },
  {
    "url": "assets/js/51.b985c5c1.js",
    "revision": "ff0a5f9001a00d771aedfbbc18e130b7"
  },
  {
    "url": "assets/js/52.4cd9e738.js",
    "revision": "7ad2806d6e641356cfff167b29ea6b12"
  },
  {
    "url": "assets/js/53.5dc8a2f3.js",
    "revision": "2e918152882663e9b18895bcc5a85ba8"
  },
  {
    "url": "assets/js/54.b29d9ff5.js",
    "revision": "b311ea816042ec95b0e90a47adae12ce"
  },
  {
    "url": "assets/js/55.a968c388.js",
    "revision": "700854ef2018ab21b7b9669dc47729eb"
  },
  {
    "url": "assets/js/56.75c499e7.js",
    "revision": "5220e4655c84fcff549239e37c7f8852"
  },
  {
    "url": "assets/js/57.cdaebb49.js",
    "revision": "0b086cfa3101d2c8f12c8bfc61f7605c"
  },
  {
    "url": "assets/js/58.5e0ce051.js",
    "revision": "274020edccdca221185de8dd605ce265"
  },
  {
    "url": "assets/js/59.1ef1567b.js",
    "revision": "ea7d9fa0784c961324189046e8e5ff34"
  },
  {
    "url": "assets/js/6.43c5379e.js",
    "revision": "bb4f9635e29c9d508381a884ed4b0bbd"
  },
  {
    "url": "assets/js/60.89f3035c.js",
    "revision": "cade2fad2cd5158f7ef53f99c8c8c8dc"
  },
  {
    "url": "assets/js/61.d0939e87.js",
    "revision": "8b04c533c90c839369bd3686eea25bc3"
  },
  {
    "url": "assets/js/62.bfd06bb6.js",
    "revision": "4d01acbd05b2113398c227945bb42996"
  },
  {
    "url": "assets/js/7.a19cb19a.js",
    "revision": "7d9bff7b39983b159d0d1f6d25c37248"
  },
  {
    "url": "assets/js/8.68ea91e1.js",
    "revision": "550eb1256a76a98d64a99d0c92564a26"
  },
  {
    "url": "assets/js/9.57ebe480.js",
    "revision": "3387dc23543d260bb2bf6cd194c95be5"
  },
  {
    "url": "assets/js/app.99a80587.js",
    "revision": "06615cdb85272b335d4a91de1cec231a"
  },
  {
    "url": "assets/js/vendors~flowchart.94c19f8c.js",
    "revision": "46ecfaa5c1ca7a01d1216d8eb8df76da"
  },
  {
    "url": "assets/js/vendors~notification.d37b4d01.js",
    "revision": "1684c1e4034d1bb275e905d573abd729"
  },
  {
    "url": "basics/index.html",
    "revision": "c0087a92b28c8de3587f37f8cbf4420a"
  },
  {
    "url": "basics/java-annotation.html",
    "revision": "4dc5069786345a54d905d60beb32c074"
  },
  {
    "url": "basics/java-array.html",
    "revision": "b510cd97844e0838e1832d43899a42c2"
  },
  {
    "url": "basics/java-basic-grammar.html",
    "revision": "e932b4fe95649d77a5eb0819dfe113ee"
  },
  {
    "url": "basics/java-class.html",
    "revision": "14fa222d02ff5e89a0e54e838ad71143"
  },
  {
    "url": "basics/java-common-tool-class.html",
    "revision": "57bb0f28d3689398534d572617dc0718"
  },
  {
    "url": "basics/java-control-statement.html",
    "revision": "cbe7cf2213270edf6963b2624d922e5c"
  },
  {
    "url": "basics/java-data-type.html",
    "revision": "32c774362bd90d76b8ac33ea910e7756"
  },
  {
    "url": "basics/java-develop-env.html",
    "revision": "9725505218e0c096ebbe6156a253d14f"
  },
  {
    "url": "basics/java-enum.html",
    "revision": "54d9a3647fc6bcbc380dffbdb4fec272"
  },
  {
    "url": "basics/java-exception.html",
    "revision": "d06743d4870ad13cc4dc28741bc74e10"
  },
  {
    "url": "basics/java-generic.html",
    "revision": "ea55b520f4e73c3b04c9d0594ea40ad2"
  },
  {
    "url": "basics/java-method.html",
    "revision": "4e5280d60efc92ab4674458caa45c62b"
  },
  {
    "url": "basics/java-oop.html",
    "revision": "74557c75d800b496aebf07bb42908509"
  },
  {
    "url": "basics/java-reflection.html",
    "revision": "dcb532544dfed0cd65e4d537714a69a6"
  },
  {
    "url": "concurrent/index.html",
    "revision": "313a326e4c824131545d68e06c2c7999"
  },
  {
    "url": "concurrent/java-atomic-class.html",
    "revision": "546c24f63ef9b417088c45b8b2568719"
  },
  {
    "url": "concurrent/java-concurrent-basic-mechanism.html",
    "revision": "3fcc1a82f5db995f21ebb14d5bfc66b3"
  },
  {
    "url": "concurrent/java-concurrent-container.html",
    "revision": "0f9179656039801aa15299d6e2e43497"
  },
  {
    "url": "concurrent/java-concurrent-introduction.html",
    "revision": "bfca8481b235a7e220a443dc492e9f40"
  },
  {
    "url": "concurrent/java-concurrent-tools.html",
    "revision": "01b247a3f8d815b2df89818d2b9ccf1e"
  },
  {
    "url": "concurrent/java-lock.html",
    "revision": "d42638fbd7bb6b251745b1d039446d3a"
  },
  {
    "url": "concurrent/java-memory-model.html",
    "revision": "90278b99f50734302bcbfa0fc8be00f2"
  },
  {
    "url": "concurrent/java-thread-pool.html",
    "revision": "7864148630f3405d5e75e999d4f03b96"
  },
  {
    "url": "concurrent/java-thread.html",
    "revision": "bbaa8763d64357a03a2b75a91d26e56b"
  },
  {
    "url": "container/index.html",
    "revision": "3f7ae305da99e69bfd9be04e700b6783"
  },
  {
    "url": "container/java-container-list.html",
    "revision": "aa98e9fbb081263c7411b3a771d032d8"
  },
  {
    "url": "container/java-container-map.html",
    "revision": "3b78e114be00e00f2396dd76014dfe94"
  },
  {
    "url": "container/java-container-queue.html",
    "revision": "f850a2fa03c1d60a423940fa8b2ccda1"
  },
  {
    "url": "container/java-container-set.html",
    "revision": "72c986ea484dc40f089c00b699235c9f"
  },
  {
    "url": "container/java-container.html",
    "revision": "10e4869052f2085a4fd8b58920582d79"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "6fc3ac323eb6e77b2c90305dab79379e"
  },
  {
    "url": "io/index.html",
    "revision": "68de28540d07ede94ac4b23f7f9f1fee"
  },
  {
    "url": "io/java-bio.html",
    "revision": "ac959967bc78a295a116a807607e1094"
  },
  {
    "url": "io/java-io-base.html",
    "revision": "1028c2b199591077067f656a039bb61e"
  },
  {
    "url": "io/java-net.html",
    "revision": "2e833586d7675cdd28794b0022dc1161"
  },
  {
    "url": "io/java-nio.html",
    "revision": "3c5f079752433d9982cb7a0577c530fa"
  },
  {
    "url": "io/java-serialization.html",
    "revision": "458cc21fb4889bdb3017db748782bc93"
  },
  {
    "url": "java-interview.html",
    "revision": "66d4791dbb1e844aef47e9ee5d138c5a"
  },
  {
    "url": "jvm/index.html",
    "revision": "2bdf50d3fa0380a37a9f255afd4ae07f"
  },
  {
    "url": "jvm/jvm-action.html",
    "revision": "8ad527ffc1c7c2dfaff5475f676e46b2"
  },
  {
    "url": "jvm/jvm-architecture.html",
    "revision": "9519eb36c20442a5feb5883e6a45ab55"
  },
  {
    "url": "jvm/jvm-bytecode.html",
    "revision": "ed3c23876cedab4cfa88449ae12989b6"
  },
  {
    "url": "jvm/jvm-class-loader.html",
    "revision": "cc315e0382bed52e8eff4a2a31c829e6"
  },
  {
    "url": "jvm/jvm-gc.html",
    "revision": "678db27ad269e229f1d7cb6c42163a45"
  },
  {
    "url": "jvm/jvm-memory.html",
    "revision": "7b663af5dc561dba4fb0dd78a006aa53"
  },
  {
    "url": "jvm/jvm-tools.html",
    "revision": "c00b569df9d53aa5acc5566bb9468bf8"
  },
  {
    "url": "jvm/troubleshooting.html",
    "revision": "8dc4b65959681784a298efdf27eff878"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
