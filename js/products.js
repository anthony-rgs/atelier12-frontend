const baseUrl = 'http://localhost:1337'

fetch(`${baseUrl}/api/produits?populate=*`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    data.data.forEach((productData) => {
      createProductElement(productData)
      productPage(productData)
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

function productPage(productData) {
  const img = document.querySelector('#show-image')
  const nameProduct = document.querySelector('#show-name')
  const brand = document.querySelector('#show-brand')
  const price = document.querySelector('#show-price')
  const quantity = document.querySelector('#show-quantity')
  const describe1 = document.querySelector('#show-describe1')
  const describe2 = document.querySelector('#show-describe2')
  const id = document.querySelector('#id')

  img.src = `${baseUrl + productData.attributes.image.data[0].attributes.url}`
  nameProduct.textContent = productData.attributes.nom
  brand.textContent = productData.attributes.marque
  price.textContent = `${productData.attributes.prix} € -`
  quantity.textContent = productData.attributes.quantite
  describe1.textContent = productData.attributes.descriptif1
  describe2.textContent = productData.attributes.descriptif2
  id.textContent = productData.attributes.id
}

const cross = document.querySelector('#cross')
const page = document.querySelector('.product-page')

function openProduct() {
  page.classList.add('open')
}

cross.addEventListener('click', () => {
  page.classList.remove('open')
})
