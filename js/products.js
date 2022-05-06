const baseUrl = 'http://localhost:1337'

fetch(`${baseUrl}/api/produits?populate=*`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    data.data.forEach((productData) => {
      createProductElement(productData)
      console.log(productData.attributes.image.data[0].attributes.url)
    })
  })

const template = document.querySelector('template#product')
const products = document.querySelector('.products')

function createProductElement(productData) {
  const clone = template.content.cloneNode(true)
  const img = clone.querySelector('#product-image')
  const brand = clone.querySelector('#brand')
  const price = clone.querySelector('#price')
  const describe1 = clone.querySelector('#describe1')
  const describe2 = clone.querySelector('#describe2')

  img.src = `${baseUrl + productData.attributes.image.data[0].attributes.url}`
  brand.textContent = productData.attributes.marque
  price.textContent = `${productData.attributes.prix} €`
  describe1.textContent = productData.attributes.descriptif1
  describe2.textContent = productData.attributes.descriptif2

  products.appendChild(clone)
}
