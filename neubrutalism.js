/**
 * Neubrutalism CSS - JavaScript Utilities
 * A minimalist, high-contrast CSS library inspired by Brutalist design principles.
 */

document.addEventListener("DOMContentLoaded", function () {
 "use strict";

 // ==========================================================================
 // Mobile Menu Toggle
 // ==========================================================================
 
 const mobileMenuButton = document.querySelector(".mobile-menu-button");
 const navbarMenu = document.querySelector(".navbar-menu");
 
 if (mobileMenuButton && navbarMenu) {
  mobileMenuButton.addEventListener("click", function () {
   navbarMenu.classList.toggle("active");
   // Toggle aria-expanded for accessibility
   const isExpanded = navbarMenu.classList.contains("active");
   mobileMenuButton.setAttribute("aria-expanded", isExpanded);
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
   if (!navbarMenu.classList.contains("active")) {
    return;
   }
   
   const isClickInsideMenu = navbarMenu.contains(event.target);
   const isClickOnMenuButton = mobileMenuButton.contains(event.target);
   
   if (!isClickInsideMenu && !isClickOnMenuButton) {
    navbarMenu.classList.remove("active");
    mobileMenuButton.setAttribute("aria-expanded", "false");
   }
  });

  // Close menu on Escape key
  document.addEventListener("keydown", function (event) {
   if (event.key === "Escape" && navbarMenu.classList.contains("active")) {
    navbarMenu.classList.remove("active");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.focus();
   }
  });
 }

 // ==========================================================================
 // Toast Notifications
 // ==========================================================================

 /**
  * Creates a toast notification
  * @param {string} message - The message to display
  * @param {string} type - Toast type: 'default', 'success', 'danger', 'warning'
  * @param {number} duration - Duration in milliseconds (default: 5000)
  * @returns {HTMLElement} The toast element
  */
 function createToast(message, type = "default", duration = 5000) {
  const toast = document.createElement("div");
  toast.classList.add("nb-toast", `nb-toast-${type}`);
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "polite");
  
  const toastContent = document.createElement("div");
  toastContent.classList.add("nb-toast-content");
  toastContent.textContent = message;
  
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("nb-toast-close");
  closeBtn.innerHTML = "&times;";
  closeBtn.setAttribute("aria-label", "Close notification");
  
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

 // ==========================================================================
 // Copy Component HTML to Clipboard
 // ==========================================================================

 /**
  * Copy HTML content of a component section to clipboard
  * @param {Event} event - Click event
  */
 async function copyComponentHTML(event) {
  const section = event.target.closest("section");
  
  if (!section) {
   return;
  }
  
  // Get all HTML content within the section, excluding the heading
  const componentHTML = Array.from(section.children)
   .filter(el => el.tagName !== "H2")
   .map(el => el.outerHTML)
   .join("\n");

  try {
   // Use modern Clipboard API with fallback
   if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(componentHTML.trim());
   } else {
    // Fallback for older browsers or insecure contexts
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = componentHTML.trim();
    tempTextArea.style.position = "fixed";
    tempTextArea.style.opacity = "0";
    tempTextArea.setAttribute("aria-hidden", "true");
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
   }

   // Create a temporary toast/feedback
   const toast = document.createElement("div");
   toast.textContent = "Component HTML copied to clipboard!";
   toast.className = "nb-copy-toast";
   toast.setAttribute("role", "status");
   toast.setAttribute("aria-live", "polite");
   
   document.body.appendChild(toast);
   
   // Remove toast after 2 seconds
   setTimeout(() => {
    if (toast.parentNode) {
     document.body.removeChild(toast);
    }
   }, 2000);
  } catch (err) {
   console.error("Failed to copy:", err);
  }
 }

 // Use event delegation for better performance
 // Only copy sections within the components container
 document.body.addEventListener("click", function(event) {
  const section = event.target.closest("section");
  // Only copy if section exists and is within the main content container
  if (section && section.closest(".nb-container")) {
   copyComponentHTML(event);
  }
 });

 // ==========================================================================
 // Dark Mode Toggle (Optional)
 // ==========================================================================

 /**
  * Toggle dark mode on the document
  * @param {boolean} enable - Whether to enable dark mode
  */
 function toggleDarkMode(enable) {
  if (enable) {
   document.documentElement.classList.add("nb-dark");
   try {
    localStorage.setItem("nb-dark-mode", "true");
   } catch (e) {
    // LocalStorage not available (privacy mode, etc.)
   }
  } else {
   document.documentElement.classList.remove("nb-dark");
   try {
    localStorage.setItem("nb-dark-mode", "false");
   } catch (e) {
    // LocalStorage not available (privacy mode, etc.)
   }
  }
 }

 /**
  * Check if dark mode is enabled
  * @returns {boolean}
  */
 function isDarkMode() {
  return document.documentElement.classList.contains("nb-dark");
 }

 // Check for saved dark mode preference
 try {
  const savedDarkMode = localStorage.getItem("nb-dark-mode");
  if (savedDarkMode === "true") {
   document.documentElement.classList.add("nb-dark");
  }
 } catch (e) {
  // LocalStorage not available (privacy mode, etc.)
 }

 // ==========================================================================
 // Expose Global Functions
 // ==========================================================================

 window.createToast = createToast;
 window.toggleDarkMode = toggleDarkMode;
 window.isDarkMode = isDarkMode;
});
