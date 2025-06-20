// Fallback for CSS loading
(function() {
  var link = document.querySelector('link[rel="preload"][as="style"]');
  if (link && !link.rel.includes('stylesheet')) {
    setTimeout(function() {
      link.rel = 'stylesheet';
    }, 100);
  }
})();