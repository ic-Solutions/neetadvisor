// Resource loading optimization
(function() {
  'use strict';
  
  // Preload critical resources
  function preloadResource(href, as, type) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  }
  
  // Load CSS asynchronously
  function loadCSS(href, media) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media || 'all';
    document.head.appendChild(link);
  }
  
  // Load JavaScript asynchronously
  function loadJS(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    if (callback) script.onload = callback;
    document.head.appendChild(script);
  }
  
  // Optimize images with lazy loading
  function optimizeImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
  
  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // Preload critical fonts
    preloadResource('/assets/fonts/poppins-regular.woff2', 'font', 'font/woff2');
    preloadResource('/assets/fonts/source-sans-pro-regular.woff2', 'font', 'font/woff2');
    
    // Load non-critical CSS after page load
    window.addEventListener('load', function() {
      // Load additional stylesheets
      setTimeout(() => {
        loadCSS('/assets/css/non-critical.css');
      }, 100);
    });
    
    // Initialize image optimization
    if ('IntersectionObserver' in window) {
      optimizeImages();
    }
    
    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').catch(function(err) {
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
  });
})();