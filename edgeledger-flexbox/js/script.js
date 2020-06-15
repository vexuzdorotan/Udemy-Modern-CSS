const clientHeight = document.getElementById('navbar').offsetHeight;

// Google Maps
(function (exports) {
  'use strict';

  function initMap() {
    exports.map = new google.maps.Map(document.querySelector('.map'), {
      center: {
        lat: 14.53698,
        lng: 120.99838,
      },
      zoom: 8,
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

// Date
const date = document.querySelector('#date');
date.textContent = new Date().getFullYear();

// Smooth Scroll
$(document).ready(function () {
  // Add smooth scrolling to all links
  $('#navbar a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - clientHeight,
        },
        800
      );
    } // End if
  });
});

// Navbar Overlay
window.addEventListener('scroll', () => {
  if (window.scrollY > 70) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});
