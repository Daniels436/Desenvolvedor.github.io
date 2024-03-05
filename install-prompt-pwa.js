let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;

  const installBanner = document.getElementById('install-banner');
  installBanner.classList.remove('hidden');
});

const installButton = document.getElementById('install-button');

installButton.addEventListener('click', () => {
  deferredPrompt.prompt();

  const installBanner = document.getElementById('install-banner');
  installBanner.classList.add('hidden');
});

window.addEventListener('appinstalled', (event) => {
  // O site foi instalado como PWA
  // Você pode realizar qualquer ação adicional ou exibir uma mensagem de sucesso
});