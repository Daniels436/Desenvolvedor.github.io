// service-worker.js

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'favicon.png',
        'CSS-PRINCIPAL/style-menu-mobile.css',
        'CSS-PRINCIPAL/style-principal.css',
        'JS/form-pattern.js',
        'JS/menu-mobile-script.js',
        'JS/slid-cel.js',
        'TERMOS/imgs-termos/logo-daniel-pixelado 2.png',
        'TERMOS/licenca.html',
        'TERMOS/politicas-de-privasidade.html',
        'TERMOS/styles-termos-de-uso.css',
        'TERMOS/termos-de-uso.html',
        'ARTIGOS/artigos.html',
        'ARTIGOS/Imgs-artigos/abrir-menu-artigos.ico',
        'ARTIGOS/Imgs-artigos/CODEPEN.png',
        'ARTIGOS/Imgs-artigos/favicon 128x128.png',
        'ARTIGOS/Imgs-artigos/favicon 40x40.png',
        'ARTIGOS/Imgs-artigos/favicon18x18.png',
        'ARTIGOS/Imgs-artigos/fx-menu-artigos.png',
        'ARTIGOS/Imgs-artigos/GITHUB.png',
        'ARTIGOS/Imgs-artigos/linkedin.png',
        'ARTIGOS/Imgs-artigos/logo-daniel-pixelado 1.png',
        'ARTIGOS/Imgs-artigos/network-web-aplicativos-desenvolvimento-video-smatp-hones-negocios-matrix (1080p).mp4',
        'ARTIGOS/Imgs-artigos/X-antigo-twitter-mobile.png',
        'ARTIGOS/menu-mobile-artigos-script.js',
        'ARTIGOS/none.css',
        'ARTIGOS/script-artigos.js',
        'ARTIGOS/style-artigos.css',
        'ARTIGOS/style-menu-mobile-artigos.css',
        'img/CODEPEN.png',
        'img/Daniel-P-3x4.jpg',
        'img/Daniel-P-Souza-02-formacao.jpg',
        'img/Daniel-P-Souza.jpg',
        'img/economia-list.png',
        'img/fechou (1).png',
        'img/fechou 003.ico',
        'img/fechou 003.png',
        'img/fechou-001.ico',
        'img/fechou.png',
        'img/Foguete-topo.png',
        'img/GITHUB.png',
        'img/ico-nav-abrir.ico',
        'img/ico-nav-abrir.png',
        'img/linkedin.png',
        'img/logo-03.png',
        'img/logo-danipix.png',
        'img/logo.png',
        'img/logo1.png',
        'img/logo128x128.png',
        'img/personal-consult.png',
        'img/projeto-plataforma-web-mobile-eventos-venda-ingresos.jpg',
        'img/seo-servicos.png',
        'img/servicos- web-page.png',
        'img/spas.png',
        'img/view-source_https___daniels436.github.io.html',
        'img/X-antigo-twitter-mobile.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});