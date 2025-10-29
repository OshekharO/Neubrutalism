document.addEventListener("DOMContentLoaded", function () {
 // Mobile menu toggle
 const mobileMenuButton = document.querySelector(".mobile-menu-button");
 const navbarMenu = document.querySelector(".navbar-menu");
 
 // Only set up mobile menu if elements exist
 if (mobileMenuButton && navbarMenu) {
  mobileMenuButton.addEventListener("click", function () {
   navbarMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking outside - optimized with early returns
  document.addEventListener("click", function (event) {
   // Early return if menu is not active
   if (!navbarMenu.classList.contains("active")) {
    return;
   }
   
   const isClickInsideMenu = navbarMenu.contains(event.target);
   const isClickOnMenuButton = mobileMenuButton.contains(event.target);
   
   if (!isClickInsideMenu && !isClickOnMenuButton) {
    navbarMenu.classList.remove("active");
   }
  });
 }

 // Toast Functionality

 function createToast(message, type = "default", duration = 5000) {
  const toast = document.createElement("div");
  toast.classList.add("nb-toast", `nb-toast-${type}`);
  const toastContent = document.createElement("div");
  toastContent.classList.add("nb-toast-content");
  toastContent.textContent = message;
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("nb-toast-close");
  closeBtn.innerHTML = "&times;";
  
  let autoRemoveTimer = null;
  
  const removeToast = () => {
   if (autoRemoveTimer) {
    clearTimeout(autoRemoveTimer);
    autoRemoveTimer = null;
   }
   toast.classList.add("nb-toast-hide");
   setTimeout(() => {
    if (toast.parentNode) {
     toast.remove();
    }
   }, 300);
  };
  
  closeBtn.addEventListener("click", removeToast);

  toast.appendChild(toastContent);
  toast.appendChild(closeBtn);
  document.body.appendChild(toast);

  // Auto-remove toast
  autoRemoveTimer = setTimeout(removeToast, duration);

  // Expose method to clear auto-remove timer
  toast.clearAutoRemove = () => {
   if (autoRemoveTimer) {
    clearTimeout(autoRemoveTimer);
    autoRemoveTimer = null;
   }
  };
  
  return toast;
 }

 // Function to copy HTML content to clipboard using modern Clipboard API
    async function copyComponentHTML(event) {
        // Find the closest section or the clicked element
        const section = event.target.closest('section');
        
        if (!section) {
            return;
        }
        
        // Get all HTML content within the section, excluding the heading
        const componentHTML = Array.from(section.children)
            .filter(el => el.tagName !== 'H2')
            .map(el => el.outerHTML)
            .join('\n');

        // Use modern Clipboard API with fallback
        try {
            // Check for secure context and Clipboard API support
            if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(componentHTML.trim());
            } else {
                // Fallback for older browsers or insecure contexts
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = componentHTML.trim();
                tempTextArea.style.position = 'fixed';
                tempTextArea.style.opacity = '0';
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);
            }

            // Create a temporary toast/feedback using CSS class
            const toast = document.createElement('div');
            toast.textContent = 'Component HTML copied to clipboard!';
            toast.className = 'nb-copy-toast';
            
            document.body.appendChild(toast);
            
            // Remove toast after 2 seconds
            setTimeout(() => {
                if (toast.parentNode) {
                    document.body.removeChild(toast);
                }
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }


    // Use event delegation for better performance
    // Only copy sections within the components container
    document.body.addEventListener('click', function(event) {
        const section = event.target.closest('section');
        // Only copy if section exists and is within the main content container
        if (section && section.closest('.nb-container')) {
            copyComponentHTML(event);
        }
    });

 // Expose global functions

 window.createToast = createToast;
});
