




// MOVIMENTO-DA-IMAGEM-TRAS-INVISIBLE-1s
  window.addEventListener('scroll', function() {
    var imgTopoSite = document.querySelector('.img-topo-site');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      imgTopoSite.style.display = 'none';
    } else {
      imgTopoSite.style.display = 'block';
    }
  });