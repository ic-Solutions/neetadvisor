// Prevent layout shifts by setting image dimensions early
(function() {
  // Set dimensions for common images before they load
  const imageDimensions = {
    'neet-advisor-400.png': { width: 400, height: 400 },
    'Neet-Advisor-new-logo.webp': { width: 96, height: 54 },
    'logo-footer-tagline-new.png': { width: 240, height: 240 },
    'icon1.webp': { width: 120, height: 120 }
  };

  // Apply dimensions to images
  function setImageDimensions() {
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      const src = img.src || img.getAttribute('src');
      if (src) {
        for (const [filename, dims] of Object.entries(imageDimensions)) {
          if (src.includes(filename)) {
            img.width = dims.width;
            img.height = dims.height;
            img.style.width = dims.width + 'px';
            img.style.height = dims.height + 'px';
            break;
          }
        }
      }
    });
  }

  // Run immediately and on DOM ready
  setImageDimensions();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setImageDimensions);
  }
})();