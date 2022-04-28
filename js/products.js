const details = document.querySelectorAll('details')
const span = document.querySelector('span')

details.forEach((targetDetail) => {
  targetDetail.addEventListener('click', () => {
    span.classList.add('active')

    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute('open')
      }
    })
  })
})
