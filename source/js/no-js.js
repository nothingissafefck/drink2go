document.addEventListener('DOMContentLoaded', () => {
  const nojsElements = document.querySelectorAll('[class*="nojs"]')

  nojsElements.forEach((element) => {
    element.classList.forEach((className) => {
      if (className.includes('nojs')) {
        element.classList.remove(className)
      }
    })
  })
})
