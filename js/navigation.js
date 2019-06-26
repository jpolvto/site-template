document.addEventListener('click', function (event) {

  // Elements to be animated
  let navMobile = document.getElementById('nav-mobile');
  let cookies = document.getElementById('cookies');

	if (event.target.id === 'menu-toggle') {
    if (navMobile.classList.contains('fade-in-down')) {
      navMobile.className = navMobile.className.replace( 'fade-in-down', 'fade-out-up' );
    }
    else {
      navMobile.classList.add('fade-in-down');
    }
  }
	if (event.target.id === 'close') {
    navMobile.className = navMobile.className.replace( 'fade-in-down', 'fade-out-up' );
  }
  if (event.target.id === 'accept') {
    cookies.classList.add('fade-out');
  }
}, false);

document.addEventListener('animationend', function (event) {
	if (event.target.id === 'nav-mobile') {
    endAnimation(event.target);
  }
  if (event.target.id === 'header-mobile') {
    endAnimation(event.target);
	}
	if (event.target.id === 'cookies') {
    endAnimation(event.target);
  }
}, false);

function endAnimation(element) { // When the animation fades out, add animate-hidden class
  if (element.classList.contains('fade-outDown')) {
    element.classList.remove('fade-outDown');
    element.classList.add('animate-hidden');
  }
  if (element.classList.contains('fade-out-up')) {
    element.classList.remove('fade-out-up');
    element.classList.add('animate-hidden');
  }
  if (element.classList.contains('fade-out')) {
    element.classList.remove('fade-out');
    element.classList.add('animate-hidden');
  }
}

document.addEventListener('animationstart', function (event) { 
	if (event.target.id === 'nav-mobile') {
    startAnimation(event.target);
  }
  if (event.target.id === 'header-mobile') {
    startAnimation(event.target);
	}
	if (event.target.id === 'cookies') {
    startAnimation(event.target);
  }
}, false);

function startAnimation(element) { // When the animation fades in, remove the animate-hidden class (animations can start from both normal visibility and a hidden state)
  if (element.classList.contains('fade-in-down')) {
    element.classList.remove('animate-hidden');
  }
  if (element.classList.contains('fade-in')) {
    element.classList.remove('animate-hidden');
  }
}