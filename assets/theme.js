// Bangla Font CDN - Documentation Theme JavaScript

function toggleMenu() {
  const menu = document.getElementById('bookMenu');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// Close menu when clicking outside on mobile
document.addEventListener('click', function(event) {
  const menu = document.getElementById('bookMenu');
  const toggle = document.querySelector('.menu-toggle');
  
  if (window.innerWidth <= 768 && 
      menu &&
      !menu.contains(event.target) && 
      toggle &&
      !toggle.contains(event.target) &&
      menu.classList.contains('active')) {
    menu.classList.remove('active');
  }
});

// Close menu on navigation (mobile)
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.book-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        const menu = document.getElementById('bookMenu');
        if (menu && menu.classList.contains('active')) {
          menu.classList.remove('active');
        }
      }
    });
  });

  // Add copy buttons to all code blocks
  initializeCopyButtons();
});

// Initialize copy buttons for code blocks
function initializeCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach((codeBlock) => {
    const pre = codeBlock.parentElement;
    
    // Skip if already wrapped
    if (pre.parentElement.classList.contains('code-block-wrapper')) {
      return;
    }
    
    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    
    // Create header
    const header = document.createElement('div');
    header.className = 'code-header';
    
    // Detect language (you can enhance this)
    const language = codeBlock.className.match(/language-(\w+)/)?.[1] || 
                    codeBlock.parentElement.getAttribute('data-lang') || 
                    'code';
    
    // Language label
    const langLabel = document.createElement('span');
    langLabel.className = 'code-language';
    langLabel.textContent = language;
    
    // Copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span>Copy</span>
    `;
    
    copyButton.addEventListener('click', () => copyCode(codeBlock, copyButton));
    
    header.appendChild(langLabel);
    header.appendChild(copyButton);
    
    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'code-content';
    pre.parentNode.insertBefore(header, pre);
    pre.parentNode.insertBefore(contentWrapper, pre);
    contentWrapper.appendChild(pre);
  });
}

// Copy code to clipboard
async function copyCode(codeBlock, button) {
  const code = codeBlock.textContent;
  
  try {
    await navigator.clipboard.writeText(code);
    
    // Update button state
    const originalHTML = button.innerHTML;
    button.classList.add('copied');
    button.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Copied!</span>
    `;
    
    // Reset after 2 seconds
    setTimeout(() => {
      button.classList.remove('copied');
      button.innerHTML = originalHTML;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy code:', err);
    
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = code;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2000);
    } catch (fallbackErr) {
      console.error('Fallback copy failed:', fallbackErr);
    }
    
    document.body.removeChild(textArea);
  }
}
