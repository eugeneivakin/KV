(function() {
  const serviceFeaturesSections = document.querySelectorAll('.t4s-service-features[data-section-id]');
  
  serviceFeaturesSections.forEach(function(section) {
    const sectionId = section.getAttribute('data-section-id');
    const items = section.querySelectorAll('.t4s-service-features__item');
    
    if (items.length === 0) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.classList.add('animate-in');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    items.forEach(function(item) {
      observer.observe(item);
    });
    
    items.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
        this.style.transitionDelay = '0s';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transitionDelay = '0s';
      });
    });
  });
})();

