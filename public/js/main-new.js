// Initialize Owl Carousels for each workshop on mobile
$(document).ready(function() {
  // Check if it's mobile (less than 1024px)
  function isMobile() {
    return $(window).width() < 1024;
  }
  
  // Initialize carousels
  function initCarousels() {
    if (isMobile()) {
      // Mobile: Initialize carousels
      $('.workshop-carousel').each(function() {
        // Only initialize if not already initialized
        if (!$(this).hasClass('owl-loaded')) {
          $(this).owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            dotsClass: 'owl-dots-mobile'
          });
        }
      });
    } else {
      // Desktop: Destroy carousels if they were initialized
      $('.workshop-carousel').each(function() {
        if ($(this).hasClass('owl-loaded')) {
          $(this).trigger('destroy.owl.carousel').removeClass('owl-loaded');
        }
      });
    }
  }
  
  // Initialize on page load
  initCarousels();
  
  // Re-initialize on window resize
  $(window).on('resize', function() {
    initCarousels();
  });
});

// Language switching function
function languageChange(evt, language) {
  var i, selectedTab, languageContent, selectedButton, selectedMenu;
  
  var languageContent = document.getElementsByClassName("lmdp-container");
  
  // Button
  selectedButton = document.getElementById(`${language}-button`);
  var languageButtons = document.getElementsByClassName("language-button");
  for (i = 0; i < languageButtons.length; i++) {
    languageButtons[i].style.display = "none";
  }
  selectedButton.style.display = "block";

  // Menu
  selectedMenu = document.getElementById(`${language}-menu`);
  var languageMenus = document.getElementsByClassName("language-menu");
  for (i = 0; i < languageMenus.length; i++) {
    languageMenus[i].style.display = "none";
  }
  selectedMenu.style.display = "block";

  // Tab
  selectedTab = document.getElementById(language);
  for (i = 0; i < languageContent.length; i++) {
    languageContent[i].style.display = "none";
  }
  selectedTab.style.display = "block";
}

// Set English as default on page load
document.addEventListener('DOMContentLoaded', function() {
  languageChange(null, 'english');
});
