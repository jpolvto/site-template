window.addEventListener('scroll', function(event) {

  let headerMobile = document.getElementById('header-mobile');
  let navMobile = document.getElementById('nav-mobile');

  if (window.smallSize === false) {
    if ( window.pageYOffset >= 500 ) { 
      headerMobile.classList.add('fade-in');   // Toggle mobile header on scrolldown for screen size larger than 1279 px
    }
    else {
      headerMobile.classList.replace('fade-in', 'fade-out'); 
      navMobile.className = navMobile.className.replace( 'fade-in-down', 'fade-out' );   // Hide mobile menu when scrolling up
    }
  }

  let hiddenElements = document.getElementsByClassName('scroll-hidden');

  for (var i = 0; i < hiddenElements.length; i++) {
    var posFromTop = hiddenElements[i].getBoundingClientRect().top;
    if (posFromTop - ( window.innerHeight / 2 ) <= 0) {
      hiddenElements[i].className = hiddenElements[i].className.replace( 'scroll-hidden', 'fade-in' ); // Toggle scroll animations
    }
  }
});

//Media queries
var mqls = [
  window.matchMedia("(min-width: 767px)"),
  window.matchMedia("(min-width: 1279px)")
]

function mediaqueryresponse(mql) {

  let headerMobile = document.getElementById('header-mobile');
  let header = document.getElementById('header');
  let navMobile = document.getElementById('nav-mobile');

  if (!mqls[0].matches && !mqls[1].matches) { // neither queries matched
    header.classList.add('animate-hidden'); // Contains either none or animate-hidden
    headerMobile.classList.remove('animate-hidden'); // Contains either fade-in or animate-hidden, fade-in is fine
    window.smallSize = true; // Register that the window is small
  }
  if (mqls[0].matches) { // min-width: 767px query matched
    header.classList.add('animate-hidden'); // Contains either none or animate-hidden
    headerMobile.classList.remove('animate-hidden'); // Contains either fade-in or animate-hidden, fade-in is fine
    window.smallSize = true; // Register that the window is small
  }
  if (mqls[1].matches) { // max-width: 1279px query matched
    header.classList.remove('animate-hidden');
    if ( window.pageYOffset < 500 ) {
      headerMobile.classList.add('animate-hidden'); // Contains either animate-hidden or fade-in
      navMobile.className = navMobile.className.replace( 'fade-in-down', 'animate-hidden' ); // Contains either fade-in-down or animate-hidden
    }
    window.smallSize = false; // Register that the window is large
  }
}

for (var i=0; i<mqls.length; i++) {
  mediaqueryresponse(mqls[i]) // call listener function explicitly at run time
  mqls[i].addListener(mediaqueryresponse) // attach listener function to listen in on state changes
}
