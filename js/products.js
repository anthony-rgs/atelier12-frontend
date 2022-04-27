// function filters(id, id2, id3) {
//   if (document.querySelector(`#filters-${id}`).classList.contains('active')) {
//     document.querySelector(`#filters-${id}`).classList.remove('active')
//   } else {
//     document.querySelector(`#filters-${id}`).classList.add('active')
//     document.querySelector('ul').classList.add('active')
//     document.querySelector(`#filters-${id2}`).classList.remove('active')
//     document.querySelector(`#filters-${id3}`).classList.remove('active')
//   }
// }

const details = [...document.querySelectorAll('details')]
console.log(details)

details.map((detail) => {
  detail.addEventListener('click', (e) => {
    e.target.classList.add('active')
  })
})
