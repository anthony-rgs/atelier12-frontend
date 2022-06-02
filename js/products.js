let productsList = [
  // Shampoo
  {
    category: 'shampoo',
    name: 'Absolut Repair',
    describe1: 'Restructurant instantané',
    describe2: 'Pour cheveux secs ou abimés',
    price: '16 €',
    quantity: '300ml',
    source: 'image/products/oreal-absolut-repair.webp',
  },
  {
    category: 'shampoo',
    name: 'Blondifier Cool',
    describe1: 'Neutralisateur anti-jaunissement',
    describe2: 'Pour cheveux blonds ou méchés',
    price: '16 €',
    quantity: '300ml',
    source: 'image/products/oreal-blondifier-cool.webp',
  },
  {
    category: 'shampoo',
    name: 'Instant Clear',
    describe1: 'Antipelliculaire purifiant',
    describe2: 'Pour tous types de cheveux',
    price: '16 €',
    quantity: '300ml',
    source: 'image/products/oreal-instant-clear.webp',
  },
  {
    category: 'shampoo',
    name: 'Liss Unlimited',
    describe1: 'Lisseur intense',
    describe2: 'Pour cheveux indisciplinés',
    price: '16 €',
    quantity: '300ml',
    source: 'image/products/oreal-liss-unlimited.webp',
  },
  {
    category: 'shampoo',
    name: 'Pro Longer',
    describe1: 'Rénovateur de longueurs',
    describe2: 'Pour cheveux longs',
    price: '16 €',
    quantity: '300ml',
    source: 'image/products/oreal-pro-longer.webp',
  },
  {
    category: 'shampoo',
    name: 'Pure Resource',
    describe1: 'Purificateur',
    describe2: 'Pour cheveux gras',
    price: '16 €',
    quantity: '300ml',
    source: 'image/products/oreal-pure-resource.webp',
  },
  {
    category: 'shampoo',
    name: 'Sensi Balance',
    describe1: 'Dermo protecteur apaisant',
    describe2: 'Pour cuir chevelu sensible',
    price: '16 €',
    quantity: '300ml',
    source: 'image/products/oreal-sensi-balance.webp',
  },
  {
    category: 'shampoo',
    name: 'Silver',
    describe1: "Neutralisateur et raviveur d'éclat",
    describe2: 'Pour cheveux gris et blancs',
    price: '16 €',
    quantity: '300ml',
    source: 'image/products/oreal-silver-magnesium.webp',
  },
  {
    category: 'shampoo',
    name: 'Vitamino Color',
    describe1: 'Fixateur de couleur',
    describe2: 'Pour cheveux colorés',
    price: '16 €',
    quantity: '300ml',
    source: 'image/products/oreal-vitamino-color.webp',
  },

  // Styling
  {
    category: 'styling',
    name: '4 Force MAT',
    describe1: 'Pommade de modelage matrifiante',
    describe2: '',
    price: '',
    quantity: '80ml',
    source: 'image/products/oreal-4mat.webp',
  },

  {
    category: 'styling',
    name: '5 Force CLAY',
    describe1: '',
    describe2: '',
    price: '',
    quantity: '',
    source: 'image/products/oreal-5clay.webp',
  },
  {
    category: 'styling',
    name: 'Fix Max',
    describe1: 'Gel sculpture',
    describe2: 'Extra-fixation',
    price: '',
    quantity: '',
    source: 'image/products/oreal-gel-fixmax.webp',
  },
  {
    category: 'styling',
    name: 'Infinium pure 6',
    describe1: '',
    describe2: '',
    price: '',
    quantity: '',
    source: 'image/products/oreal-laque.webp',
  },
  {
    category: 'styling',
    name: 'Volume Lift',
    describe1: 'Spray-mousse',
    describe2: 'Volume racines',
    price: '',
    quantity: '',
    source: 'image/products/oreal-mousse-volume-lift.webp',
  },
  {
    category: 'styling',
    name: 'Full Volume Extra',
    describe1: 'Mousse volume',
    describe2: 'Fixation extra forte',
    price: '',
    quantity: '',
    source: 'image/products/oreal-mousse.webp',
  },
  {
    category: 'styling',
    name: 'WEB',
    describe1: 'Pâte sculptante évolutive',
    describe2: '',
    price: '',
    quantity: '',
    source: 'image/products/oreal-pate-sculptante.webp',
  },
  {
    category: 'styling',
    name: '7 Poker Paste',
    describe1: 'Pâte compacte repositionnable',
    describe2: 'Fixation Ultime',
    price: '',
    quantity: '',
    source: 'image/products/oreal-pokerpaste.webp',
  },
  {
    category: 'styling',
    name: 'Fix Design',
    describe1: 'Spray fixation localisée',
    describe2: '',
    price: '',
    quantity: '',
    source: 'image/products/oreal-spray-fixation.webp',
  },

  // Care
  {
    category: 'care',
    name: 'Aminexil Advanced',
    describe1: 'Anti-chute',
    describe2: '',
    price: '48 €',
    quantity: '10x6ml',
    source: 'image/products/oreal-aminexil-advanced.webp',
  },
  {
    category: 'care',
    name: 'Solar Sublime',
    describe1: 'Soin-spray invisible protecteur',
    describe2: '',
    price: '',
    quantity: '125ml',
    source: 'image/products/oreal-creme-protectrice.webp',
  },
  {
    category: 'care',
    name: 'Absolut Repair',
    describe1: 'Masque restructurant instantané',
    describe2: 'Pour cheveux secs et abimés',
    price: '28 €',
    quantity: '250ml',
    source: 'image/products/oreal-masque-absolut-repair.webp',
  },
  {
    category: 'care',
    name: 'Liss Unlimited',
    describe1: 'Masque lisseur intense',
    describe2: 'Pour cheveux indisciplinés',
    price: '28 €',
    quantity: '250ml',
    source: 'image/products/oreal-masque-liss.webp',
  },
  {
    category: 'care',
    name: 'Pro longer',
    describe1: 'Masque rénovateur de longueurs',
    describe2: 'Pour cheveux longs',
    price: '28 €',
    quantity: '250ml',
    source: 'image/products/oreal-masque-pro-longer.webp',
  },
  {
    category: 'care',
    name: 'Vitamino Color',
    describe1: 'Masque fixateur de couleur',
    describe2: 'Pour cheveux colorés',
    price: '28 €',
    quantity: '250ml',
    source: 'image/products/oreal-masque-vitamino.webp',
  },
  {
    category: 'care',
    name: 'Mythic Oil',
    describe1: 'Huile nutritive',
    describe2: 'Pour tous types de cheveux',
    price: '28 €',
    quantity: '',
    source: 'image/products/oreal-mythic-oil.webp',
  },
]

// Random products order
function getRandomNumbers(list) {
  const randomList = []
  for (let i = 1; i < 2; ) {
    const random = Math.floor(Math.random() * list.length)
    if (randomList.includes(random) == false) {
      randomList.push(random)
    }
    if (randomList.length == list.length) {
      return randomList
    }
  }
}

// Create product for the products page
const randomProductList = getRandomNumbers(productsList)
const template = document.querySelector('template#product')
const products = document.querySelector('.products')

function createProductElement(randomProductList) {
  for (let i = 0; i < randomProductList.length; i++) {
    const clone = template.content.cloneNode(true)
    const product = clone.querySelector('.product')
    const img = clone.querySelector('#product-image')
    const price = clone.querySelector('#price-product')
    const describe1 = clone.querySelector('#describe1')
    const describe2 = clone.querySelector('#describe2')

    product.classList.add(productsList[randomProductList[i]].category)
    product.setAttribute('id', `${randomProductList[i]}`)
    img.src = productsList[randomProductList[i]].source
    price.textContent = productsList[randomProductList[i]].price
    describe1.textContent = productsList[randomProductList[i]].describe1
    describe2.textContent = productsList[randomProductList[i]].describe2
    products.appendChild(clone)
  }
}

createProductElement(randomProductList)

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
  price.textContent = `${productsList[clickedId].price} -`
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
const filterPrice = document.querySelector('#filter-price')
const spanCategory = document.querySelector('#span-category')
const spanPrice = document.querySelector('#span-price')
const ulCategory = document.querySelector('#ul-category')
const ulPrice = document.querySelector('#ul-price')

const defaultFilters = document.querySelector('#default')
const shampoo = document.querySelector('#shampoo')
const styling = document.querySelector('#styling')
const care = document.querySelector('#care')
const productsShampoo = document.querySelectorAll('.shampoo')
const productsStyling = document.querySelectorAll('.styling')
const productsCare = document.querySelectorAll('.care')

// Open filters
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

// Close filters
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

//Filter Shampoo
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

//Filter Styling
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

//Filter Care
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
