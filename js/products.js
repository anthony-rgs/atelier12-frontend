const baseUrl = 'http://localhost:1337'

fetch(`${baseUrl}/api/produits?populate=*`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    data.data.forEach((productData) => {
      const productElement = createProductElement(productData)
      console.log(productElement)

      productElement.addEventListener('click', () => {
        page.classList.add('open')
        productPage(productData)
      })
    })
  })

const template = document.querySelector('template#product')
const products = document.querySelector('.products')

function createProductElement(productData) {
  const clone = template.content.cloneNode(true)
  const img = clone.querySelector('#product-image')
  const brand = clone.querySelector('#brand-product')
  const price = clone.querySelector('#price-product')
  const describe1 = clone.querySelector('#describe1')
  const describe2 = clone.querySelector('#describe2')

  img.src = `${baseUrl + productData.attributes.image.data[0].attributes.url}`
  brand.textContent = productData.attributes.marque
  price.textContent = `${productData.attributes.prix} €`
  describe1.textContent = productData.attributes.descriptif1
  describe2.textContent = productData.attributes.descriptif2

  products.appendChild(clone)
  return Array.from(products.querySelectorAll('.product')).at(-1)
}

function productPage(productData) {
  const img = document.querySelector('#show-image')
  const nameProduct = document.querySelector('#show-name')
  const brand = document.querySelector('#show-brand')
  const price = document.querySelector('#show-price')
  const quantity = document.querySelector('#show-quantity')
  const describe1 = document.querySelector('#show-describe1')
  const describe2 = document.querySelector('#show-describe2')

  img.src = `${baseUrl + productData.attributes.image.data[0].attributes.url}`
  nameProduct.textContent = productData.attributes.nom
  brand.textContent = productData.attributes.marque
  price.textContent = `${productData.attributes.prix} € -`
  quantity.textContent = productData.attributes.quantite
  describe1.textContent = productData.attributes.descriptif1
  describe2.textContent = productData.attributes.descriptif2
}

const cross = document.querySelector('#cross')
const page = document.querySelector('.product-page')

function openProduct() {
  page.classList.add('open')
}

cross.addEventListener('click', () => {
  page.classList.remove('open')
})

// Filter Open / Close
const filterCategory = document.querySelector('#filter-category')
const filterPrice = document.querySelector('#filter-price')
const spanCategory = document.querySelector('#span-category')
const spanPrice = document.querySelector('#span-price')
const ulCategory = document.querySelector('#ul-category')
const ulPrice = document.querySelector('#ul-price')

filterCategory.addEventListener('click', () => {
  spanPrice.classList.remove('filter')
  ulPrice.classList.remove('filter')

  if (spanCategory.classList.contains('filter')) {
    spanCategory.classList.remove('filter')
    ulCategory.classList.remove('filter')
  } else {
    spanCategory.classList.add('filter')
    ulCategory.classList.add('filter')
  }
})

filterPrice.addEventListener('click', () => {
  spanCategory.classList.remove('filter')
  ulCategory.classList.remove('filter')
  if (spanPrice.classList.contains('filter')) {
    spanPrice.classList.remove('filter')
    ulPrice.classList.remove('filter')
  } else {
    spanPrice.classList.add('filter')
    ulPrice.classList.add('filter')
  }
})
