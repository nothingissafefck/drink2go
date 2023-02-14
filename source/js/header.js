document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')
  const burgerButton = document.querySelector('.burger-menu')

  function toggleMenuState() {
    header.classList.toggle('header--menu-open')
    burgerButton.classList.toggle('burger-menu--open')
  }

  burgerButton.addEventListener('click', toggleMenuState)
})
