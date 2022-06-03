let productsList = [
  // Shampoo
  {
    category: 'shampoo',
    name: 'Absolut Repair',
    describe1: 'Restructurant instantané',
    describe2: 'Pour cheveux secs ou abimés',
    price: '16',
    quantity: '300ml',
    source: 'image/products/oreal-absolut-repair.webp',
  },
  {
    category: 'shampoo',
    name: 'Blondifier Cool',
    describe1: 'Neutralisateur anti-jaunissement',
    describe2: 'Pour cheveux blonds ou méchés',
    price: '16',
    quantity: '300ml',
    source: 'image/products/oreal-blondifier-cool.webp',
  },
  {
    category: 'shampoo',
    name: 'Instant Clear',
    describe1: 'Antipelliculaire purifiant',
    describe2: 'Pour tous types de cheveux',
    price: '16',
    quantity: '300ml',
    source: 'image/products/oreal-instant-clear.webp',
  },
  {
    category: 'shampoo',
    name: 'Liss Unlimited',
    describe1: 'Lisseur intense',
    describe2: 'Pour cheveux indisciplinés',
    price: '16',
    quantity: '300ml',
    source: 'image/products/oreal-liss-unlimited.webp',
  },
  {
    category: 'shampoo',
    name: 'Pro Longer',
    describe1: 'Rénovateur de longueurs',
    describe2: 'Pour cheveux longs',
    price: '16',
    quantity: '300ml',
    source: 'image/products/oreal-pro-longer.webp',
  },
  {
    category: 'shampoo',
    name: 'Pure Resource',
    describe1: 'Purificateur',
    describe2: 'Pour cheveux gras',
    price: '16',
    quantity: '300ml',
    source: 'image/products/oreal-pure-resource.webp',
  },
  {
    category: 'shampoo',
    name: 'Sensi Balance',
    describe1: 'Dermo protecteur apaisant',
    describe2: 'Pour cuir chevelu sensible',
    price: '16',
    quantity: '300ml',
    source: 'image/products/oreal-sensi-balance.webp',
  },
  {
    category: 'shampoo',
    name: 'Silver',
    describe1: "Neutralisateur et raviveur d'éclat",
    describe2: 'Pour cheveux gris et blancs',
    price: '16',
    quantity: '300ml',
    source: 'image/products/oreal-silver-magnesium.webp',
  },
  {
    category: 'shampoo',
    name: 'Vitamino Color',
    describe1: 'Fixateur de couleur',
    describe2: 'Pour cheveux colorés',
    price: '16',
    quantity: '300ml',
    source: 'image/products/oreal-vitamino-color.webp',
  },

  // Styling
  {
    category: 'styling',
    name: 'MAT',
    describe1: 'Cire de modelage matrifiante',
    describe2: '',
    price: '17',
    quantity: '80ml',
    source: 'image/products/oreal-4mat.webp',
  },
  {
    category: 'styling',
    name: 'Poker Paste',
    describe1: 'Cire compacte repositionnable',
    describe2: 'Fixation Ultime',
    price: '15',
    quantity: '',
    source: 'image/products/oreal-pokerpaste.webp',
  },
  {
    category: 'styling',
    name: 'CLAY',
    describe1: 'Cire',
    describe2: '',
    price: '17',
    quantity: '',
    source: 'image/products/oreal-5clay.webp',
  },
  {
    category: 'styling',
    name: 'WEB',
    describe1: 'Pâte sculptante évolutive',
    describe2: '',
    price: '16',
    quantity: '',
    source: 'image/products/oreal-pate-sculptante.webp',
  },
  {
    category: 'styling',
    name: 'Fix Max',
    describe1: 'Gel extra-fixation',
    describe2: '',
    price: '18',
    quantity: '',
    source: 'image/products/oreal-gel-fixmax.webp',
  },
  {
    category: 'styling',
    name: 'Infinium pure 6',
    describe1: 'Laque coiffante',
    describe2: 'Pour tous types de cheveux',
    price: '14',
    quantity: '',
    source: 'image/products/oreal-laque.webp',
  },
  {
    category: 'styling',
    name: 'Volume Lift',
    describe1: 'Mousse',
    describe2: 'Volume racines',
    price: '18',
    quantity: '',
    source: 'image/products/oreal-mousse-volume-lift.webp',
  },
  {
    category: 'styling',
    name: 'Full Volume Extra',
    describe1: 'Mousse volume',
    describe2: 'Fixation extra forte',
    price: '18',
    quantity: '',
    source: 'image/products/oreal-mousse.webp',
  },
  {
    category: 'styling',
    name: 'Fix Design',
    describe1: 'Spray fixation localisée',
    describe2: '',
    price: '18',
    quantity: '',
    source: 'image/products/oreal-spray-fixation.webp',
  },

  // Care
  {
    category: 'care',
    name: 'Aminexil Advanced',
    describe1: 'Anti-chute',
    describe2: 'Pour tous types de cheveux',
    price: '48',
    quantity: '10x6ml',
    source: 'image/products/oreal-aminexil-advanced.webp',
  },
  {
    category: 'care',
    name: 'Absolut Repair',
    describe1: 'Masque restructurant instantané',
    describe2: 'Pour cheveux secs et abimés',
    price: '28',
    quantity: '250ml',
    source: 'image/products/oreal-masque-absolut-repair.webp',
  },
  {
    category: 'care',
    name: 'Liss Unlimited',
    describe1: 'Masque lisseur intense',
    describe2: 'Pour cheveux indisciplinés',
    price: '28',
    quantity: '250ml',
    source: 'image/products/oreal-masque-liss.webp',
  },
  {
    category: 'care',
    name: 'Pro longer',
    describe1: 'Masque rénovateur de longueurs',
    describe2: 'Pour cheveux longs',
    price: '28',
    quantity: '250ml',
    source: 'image/products/oreal-masque-pro-longer.webp',
  },
  {
    category: 'care',
    name: 'Vitamino Color',
    describe1: 'Masque fixateur de couleur',
    describe2: 'Pour cheveux colorés',
    price: '28',
    quantity: '250ml',
    source: 'image/products/oreal-masque-vitamino.webp',
  },
  {
    category: 'care',
    name: 'Mythic Oil',
    describe1: 'Huile nutritive',
    describe2: 'Pour tous types de cheveux',
    price: '28',
    quantity: '100ml',
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
    price.textContent = `${productsList[randomProductList[i]].price} €`
    describe1.textContent = productsList[randomProductList[i]].describe1
    describe2.textContent = productsList[randomProductList[i]].describe2
    products.appendChild(clone)
  }
}

createProductElement(randomProductList)
