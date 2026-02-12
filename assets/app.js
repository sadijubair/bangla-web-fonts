// Bangla Web Fonts CDN - Interactive JavaScript
// Developer: Sadi Jubair

// Copy code to clipboard functionality
function copyCode(button) {
  const codeBlock = button.parentElement;
  const code = codeBlock.querySelector('code');
  
  if (code) {
    const textToCopy = code.textContent;
    
    // Use modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showCopyFeedback(button);
      }).catch(err => {
        console.error('Failed to copy:', err);
        fallbackCopy(textToCopy, button);
      });
    } else {
      fallbackCopy(textToCopy, button);
    }
  }
}

// Fallback copy method for older browsers
function fallbackCopy(text, button) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    document.execCommand('copy');
    showCopyFeedback(button);
  } catch (err) {
    console.error('Fallback copy failed:', err);
    alert('Failed to copy. Please copy manually.');
  }
  
  document.body.removeChild(textarea);
}

// Show visual feedback when code is copied
function showCopyFeedback(button) {
  const originalText = button.textContent;
  button.textContent = 'Copied!';
  button.classList.add('bg-green-600');
  button.classList.remove('bg-blue-600');
  
  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove('bg-green-600');
    button.classList.add('bg-blue-600');
  }, 2000);
}

// Smooth scroll to sections
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Add scroll-to-top button
  createScrollToTopButton();
});

// Create and manage scroll-to-top button
function createScrollToTopButton() {
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.className = 'fixed bottom-8 right-8 bg-purple-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-purple-700 transition opacity-0 pointer-events-none';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  scrollBtn.style.transition = 'opacity 0.3s, transform 0.3s';
  
  document.body.appendChild(scrollBtn);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.opacity = '1';
      scrollBtn.style.pointerEvents = 'auto';
    } else {
      scrollBtn.style.opacity = '0';
      scrollBtn.style.pointerEvents = 'none';
    }
  });
  
  // Scroll to top on click
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Add animation on scroll for feature cards
if (typeof IntersectionObserver !== 'undefined') {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  });
}

// Console message
console.log('%c🔤 Bangla Web Fonts CDN', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cDeveloper: Sadi Jubair', 'font-size: 14px; color: #666;');
console.log('%cWebsite: https://fonts.sadi.com.bd', 'font-size: 14px; color: #666;');
