const swiper = new Swiper('.slider-main-block', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.body-main-block__arrow.swiper-button-next',
    prevEl: '.body-main-block__arrow.swiper-button-prev',
  },
});

(function() {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  const menuCloseItem = document.querySelector('.nav__close');
  burgerItem.addEventListener('click', () =>{
    menu.classList.add('header__menu_active')
  });
  menuCloseItem.addEventListener('click', () =>{
    menu.classList.remove('header__menu_active')
  });
}());


// таби


const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest('.tabs-deals__button')) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('active');
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
  }
});