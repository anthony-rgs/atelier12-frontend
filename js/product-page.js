// Create product for the product selected box
function productPage(clickedId) {
  const productPage = document.querySelector('.product-page')
  const body = document.body

  const img = document.querySelector('#show-image')
  const nameProduct = document.querySelector('#show-name')
  const price = document.querySelector('#show-price')
  const quantity = document.querySelector('#show-quantity')
  const describe1 = document.querySelector('#show-describe1')
  const describe2 = document.querySelector('#show-describe2')

  productPage.classList.add('open')
  body.classList.add('hidden')
  img.src = productsList[clickedId].source
  nameProduct.textContent = productsList[clickedId].name
  price.textContent = `${productsList[clickedId].price} € -`
  quantity.textContent = productsList[clickedId].quantity
  describe1.textContent = productsList[clickedId].describe1
  describe2.textContent = productsList[clickedId].describe2
}

// Close product selected box
const cross = document.querySelector('#cross')
const page = document.querySelector('.product-page')

cross.addEventListener('click', () => {
  page.classList.remove('open')
  document.body.classList.remove('hidden')
})

// Filters
const filterCategory = document.querySelector('#filter-category')
const spanCategory = document.querySelector('#span-category')
const ulCategory = document.querySelector('#ul-category')

const defaultFilters = document.querySelector('#default')
const shampoo = document.querySelector('#shampoo')
const styling = document.querySelector('#styling')
const care = document.querySelector('#care')
const productsShampoo = document.querySelectorAll('.shampoo')
const productsStyling = document.querySelectorAll('.styling')
const productsCare = document.querySelectorAll('.care')

// Open - Close filters
filterCategory.addEventListener('click', () => {
  if (spanCategory.classList.contains('filter')) {
    spanCategory.classList.remove('filter')
    ulCategory.classList.remove('filter')
  } else {
    spanCategory.classList.add('filter')
    ulCategory.classList.add('filter')
  }
})

// Filter Shampoo
shampoo.addEventListener('click', () => {
  defaultFilters.classList.add('visible')
  for (const productShampoo of productsShampoo) {
    productShampoo.classList.remove('hidden')
  }
  for (const productStyling of productsStyling) {
    productStyling.classList.add('hidden')
  }
  for (const productCare of productsCare) {
    productCare.classList.add('hidden')
  }
})

// Filter Styling
styling.addEventListener('click', () => {
  defaultFilters.classList.add('visible')
  for (const productStyling of productsStyling) {
    productStyling.classList.remove('hidden')
  }
  for (const productShampoo of productsShampoo) {
    productShampoo.classList.add('hidden')
  }
  for (const productCare of productsCare) {
    productCare.classList.add('hidden')
  }
})

// Filter Care
care.addEventListener('click', () => {
  defaultFilters.classList.add('visible')
  for (const productCare of productsCare) {
    productCare.classList.remove('hidden')
  }
  for (const productShampoo of productsShampoo) {
    productShampoo.classList.add('hidden')
  }
  for (const productStyling of productsStyling) {
    productStyling.classList.add('hidden')
  }
})

// Clear Filters
defaultFilters.addEventListener('click', () => {
  defaultFilters.classList.remove('visible')
  for (const productShampoo of productsShampoo) {
    productShampoo.classList.remove('hidden')
  }
  for (const productStyling of productsStyling) {
    productStyling.classList.remove('hidden')
  }
  for (const productCare of productsCare) {
    productCare.classList.remove('hidden')
  }
})
