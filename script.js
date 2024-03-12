$(document).ready(function() {
    // Smooth scrolling for anchor links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Collapse Navbar when a link is clicked
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // Scroll Reveal Animation
    ScrollReveal().reveal('.main-content', { delay: 300 });

    // Form Validation
    $("form").submit(function(event){
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        if(name === '' || email === '' || message === '') {
            alert("Please fill in all fields.");
            return false;
        }
        // Add AJAX request here to submit the form data
    });

    // Smooth Scroll to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    $('.scroll-to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // Control Carousel Autoplay
    $('.carousel').carousel({
        interval: 5000 // Set to false to disable autoplay
    });

    // Toggle Dark Mode
    $('.dark-mode-toggle').click(function() {
        $('body').toggleClass('dark-mode');
    });

    // Add fadeIn animation to elements with class .animated-popup
    $('.animated-popup').fadeIn(1000); // Adjust duration as needed
});

let startX, startY, endX, endY;

document.addEventListener('touchstart', function (e) {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}, false);

document.addEventListener('touchend', function (e) {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  let diffX = startX - endX;
  let diffY = startY - endY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      // Swipe left
      console.log('Swiped left');
    } else {
      // Swipe right
      console.log('Swiped right');
    }
  } else {
    if (diffY > 0) {
      // Swipe up
      console.log('Swiped up');
    } else {
      // Swipe down
      console.log('Swiped down');
    }
  }
}, false);
window.addEventListener('load', function() {
  // Get the text elements within the jumbotron
  var jumbotronText = document.querySelectorAll('.jumbotron h1, .jumbotron p, .container');

  // Add a class to trigger animation for each text element
  jumbotronText.forEach(function(element) {
    element.classList.add('animate');
  });
});
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          // Store hash
          var hash = this.hash;
          // Using jQuery's animate() method to add smooth page scroll
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
          });
      } // End if
  });
});

function scrollToAbout() {
  // Find the position of the "About" section relative to the top of the page
  const aboutSection = document.getElementById('about');
  const aboutSectionPosition = aboutSection.offsetTop;

  // Scroll the page to the "About" section
  window.scrollTo({
      top: aboutSectionPosition,
      behavior: 'smooth' // This ensures smooth scrolling
  });
}

function scrollToAbout() {
  // Find the position of the "About" section relative to the top of the page
  const aboutSection = document.getElementById('vehicles');
  const aboutSectionPosition = aboutSection.offsetTop;

  // Scroll the page to the "vehicles" section
  window.scrollTo({
      top: aboutSectionPosition,
      behavior: 'smooth' // This ensures smooth scrolling
  });
}


function scrollToAbout() {
  // Find the position of the "About" section relative to the top of the page
  const aboutSection = document.getElementById('packages');
  const aboutSectionPosition = aboutSection.offsetTop;

  // Scroll the page to the "vehicles" section
  window.scrollTo({
      top: aboutSectionPosition,
      behavior: 'smooth' // This ensures smooth scrolling
  });
}

function scrollToAbout() {
  // Find the position of the "About" section relative to the top of the page
  const aboutSection = document.getElementById('contactsss');
  const aboutSectionPosition = aboutSection.offsetTop;

  // Scroll the page to the "vehicles" section
  window.scrollTo({
      top: aboutSectionPosition,
      behavior: 'smooth' // This ensures smooth scrolling
  });
}