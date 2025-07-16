// SECTION HEADER 
document.addEventListener("DOMContentLoaded", function () {
  const chk = document.getElementById('chk1');
  const menuLinks = document.querySelectorAll('header ul li a');
  const menu = document.querySelector('header ul');

  // Cerrar menú al hacer clic en cualquier enlace
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      chk.checked = false;
    });
  });

  // Cerrar menú al hacer clic fuera del menú
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target) || e.target.closest('.menu') || e.target === chk;
    if (!isClickInsideMenu) {
      chk.checked = false;
    }
  });
});
// END SECTION HEADER

//SECTION SLIDER
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// SECTION TEAM
const teamBtns = document.querySelectorAll(".js-team-btn");

teamBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.classList.toggle("show");
  });
});  