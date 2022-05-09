// Open - Close filter
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

// Filters
const shampoo = document.querySelector('#shampoo')
const styling = document.querySelector('#styling')
const care = document.querySelector('#care')
const defaultFilters = document.querySelector('#default')
const getProductElements = () => {
  const productsShampoo = document.querySelectorAll('.product.Shampoing')
  const productsStyling = document.querySelectorAll('.product.Coiffant')
  const productsCare = document.querySelectorAll('.product.Soin')
  return { productsShampoo, productsStyling, productsCare }
}

// Get products from strapi
const baseUrl = 'http://localhost:1337'

fetch(`${baseUrl}/api/produits?populate=*`)
  .then((res) => res.json())
  .then((data) => {
    data.data.forEach((productData) => {
      const productElement = createProductElement(productData)

      // Show product selected
      productElement.addEventListener('click', () => {
        page.classList.add('open')
        document.body.classList.add('hidden')
        productPage(productData)
      })

      // Filters
      const { productsShampoo, productsStyling, productsCare } =
        getProductElements()

      // Filter Shampoo
      shampoo.addEventListener('click', () => {
        defaultFilters.classList.add('visible')
        productsShampoo.forEach((productShampoo) => {
          productShampoo.style.display = 'block'
        })
        productsStyling.forEach((productStyling) => {
          productStyling.style.display = 'none'
        })
        productsCare.forEach((productCare) => {
          productCare.style.display = 'none'
        })

        shampoo.classList.add('click')
      })

      // Filter Styling
      styling.addEventListener('click', () => {
        defaultFilters.classList.add('visible')
        productsStyling.forEach((productStyling) => {
          productStyling.style.display = 'block'
        })
        productsShampoo.forEach((productShampoo) => {
          productShampoo.style.display = 'none'
        })
        productsCare.forEach((productCare) => {
          productCare.style.display = 'none'
        })
      })

      // Filter Care
      care.addEventListener('click', () => {
        defaultFilters.classList.add('visible')
        productsCare.forEach((productCare) => {
          productCare.style.display = 'block'
        })
        productsShampoo.forEach((productShampoo) => {
          productShampoo.style.display = 'none'
        })
        productsStyling.forEach((productStyling) => {
          productStyling.style.display = 'none'
        })
      })

      // Clear Filters
      defaultFilters.addEventListener('click', () => {
        defaultFilters.classList.remove('visible')
        productsShampoo.forEach((productShampoo) => {
          productShampoo.style.display = 'block'
        })
        productsStyling.forEach((productStyling) => {
          productStyling.style.display = 'block'
        })
        productsCare.forEach((productCare) => {
          productCare.style.display = 'block'
        })
      })
      console.log(productData.attributes.categorie)
    })
  })

// Create product for the products page
const template = document.querySelector('template#product')
const products = document.querySelector('.products')

function createProductElement(productData) {
  const clone = template.content.cloneNode(true)
  const product = clone.querySelector('.product')
  const img = clone.querySelector('#product-image')
  const brand = clone.querySelector('#brand-product')
  const price = clone.querySelector('#price-product')
  const describe1 = clone.querySelector('#describe1')
  const describe2 = clone.querySelector('#describe2')

  product.classList.add(productData.attributes.categorie)
  img.src = `${baseUrl + productData.attributes.image.data[0].attributes.url}`
  brand.textContent = productData.attributes.marque
  price.textContent = `${productData.attributes.prix} €`
  describe1.textContent = productData.attributes.descriptif1
  describe2.textContent = productData.attributes.descriptif2

  products.appendChild(clone)
  return Array.from(products.querySelectorAll('.product')).at(-1)
}

// Create product for the product selected box
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

// Open - Close product selected box
const cross = document.querySelector('#cross')
const page = document.querySelector('.product-page')

cross.addEventListener('click', () => {
  page.classList.remove('open')
  document.body.classList.remove('hidden')
})
