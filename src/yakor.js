const links = document.querySelectorAll('.header-hero .hero-div a');
//'.header-nav-list .header-nav-item a'

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}
