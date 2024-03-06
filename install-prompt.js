let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;

  const installButton = document.getElementById('install-button');
  installButton.classList.remove('hidden');
});

const installButton = document.getElementById('install-button');

installButton.addEventListener('click', () => {
  deferredPrompt.prompt();

  installButton.classList.add('hidden');
});

window.addEventListener('appinstalled', (event) => {
  // O site foi instalado como PWA
  // Você pode realizar qualquer ação adicional ou exibir uma mensagem de sucesso
  console.log('O site foi instalado como PWA com sucesso!');
  alert('O site foi instalado como PWA com sucesso!');
});