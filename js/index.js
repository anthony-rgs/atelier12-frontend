womenBorder = document.querySelector('#women')
womenBox = document.querySelector('#women-price')

menBorder = document.querySelector('#men')
menBox = document.querySelector('#men-price')

womenBorder.addEventListener('click', () => {
  womenBorder.classList.add('active')
  menBorder.classList.remove('active')
  womenBox.classList.remove('hidden')
  menBox.classList.add('hidden')
  womenBox.classList.add('visible')
})

menBorder.addEventListener('click', () => {
  menBorder.classList.add('active')
  womenBorder.classList.remove('active')
  womenBox.classList.add('hidden')
  menBox.classList.remove('hidden')
  menBox.classList.add('visible')
})

let commentList = [
  {
    name: 'Philippe Negrier',
    commentary:
      "<span class='apostrophe'>“ </span>L'accueil est souriant et bienveillant mais le professionnalisme de Sandra la propriétaire et officiante est plus qu'à la hauteur, que ce soit pour un homme attentif comme moi ou pour ma fille adolescente exigeante, versatile et éternelle insatisfaite, c'est juste le signe d'une vraie maîtrise de l'art et d'une qualité de conseil juste, pertinente et respectueuse des envies. Je n'en ai pas changé depuis 15 ans et avant même d'être propriétaire de son salon, elle avait déjà cet engagement et ce souci de qualité et de respect de ses client(e)s. <span class='apostrophe'> “</span>",
  },
  {
    name: 'David Stevens',
    commentary:
      "<span class='apostrophe'>“ </span>Je vous conseille vivement L'Atelier 12. Tout y est : l'accueil, l'écoute, les conseils, le professionnalisme et des tarifs très corrects ! <br> Sandra est adorable. N'hésitez surtout pas.<span class='apostrophe'> “</span>",
  },
  {
    name: 'Hervé Prade',
    commentary:
      "<span class='apostrophe'>“ </span> Un super salon avec une super coiffeuse (Sandra) et un accueil chaleureux !! Bref c'est devenu mon adresse pour me faire couper les cheveux à Paris. <br> N'hésitez pas vous ne le regretterez pas !<span class='apostrophe'> “</span>",
  },
  {
    name: 'Catherine Poyet',
    commentary:
      "<span class='apostrophe'>“ </span>Ce salon de coiffure tenu par Sandra est une excellente adresse : accueil super et compétence parfaite. <br> Courez-y vous faire coiffer / couper les cheveux !<span class='apostrophe'> “</span>",
  },
  {
    name: 'Romain Dufrene',
    commentary:
      "<span class='apostrophe'>“ </span> Vous cherchez un salon professionnel, une coiffeuse attentionnée, disponible, souriante et s'adaptant aux demandes de ses clients ? <br> N'attendez plus et foncez à l'Atelier !<span class='apostrophe'> “</span>",
  },
  {
    name: 'Karine Recci',
    commentary:
      "<span class='apostrophe'>“ </span>Je suis passée dernièrement pour faire des mèches, vraiment top ! Et la patronne Sandra est vraiment géniale, je recommande !!<span class='apostrophe'> “</span>",
  },
  {
    name: 'Julie Fraysse',
    commentary:
      "<span class='apostrophe'>“ </span>Super salon que je recommande vivement ! Je remercie Sandra pour son écoute, sa bonne humeur et son professionnalisme ! <span class='apostrophe'> “</span>",
  },
  {
    name: 'Sensitive shiatsu',
    commentary:
      "<span class='apostrophe'>“ </span>Je suis un client fidèle depuis plus de 10 ans (ça se fête !). Elle répond à toutes mes demandes et elle est de bons conseils quand il faut. <br> Que demander de plus !  <span class='apostrophe'> “</span>",
  },
  {
    name: 'Hélène Malaroda',
    commentary:
      "<span class='apostrophe'>“ </span>Très professionnelle, à la fois à l'écoute de vos désirs mais aussi de bon conseil. <br> Je recommande vivement ! <span class='apostrophe'> “</span>",
  },
  {
    name: 'Martine Metayer',
    commentary:
      "<span class='apostrophe'>“ </span> La dirigeante de ce salon de coiffure est très professionnelle et à l'écoute de ses clients !<span class='apostrophe'> “</span>",
  },
  {
    name: 'Bernadette55',
    commentary:
      "<span class='apostrophe'>“ </span>Je l'adore! Sandra (la responsable du salon) s'occupait de mes cheveux dans le salon où elle était employée pendant des années. <br> Je n'ai pas hésité une seule seconde pour la suivre à l'autre de bout de Paris lorsqu'elle a ouvert son propre salon. Je lui confie ma chevelure tous les mois avec toutes mes envies plus ou moins saugrenues mais qu'elle respecte. Allez y vous ne serez pas déçu. De plus ses tarifs sont très corrects.<span class='apostrophe'> “</span>",
  },
  {
    name: 'Olivier Le Marois',
    commentary:
      "<span class='apostrophe'>“ </span>L'Atelier est mon salon de coiffure depuis 4 ans. Le résultat est toujours impeccable, parfaitement conforme à mes attentes, pour un prix plus que raisonnable. Et la patronne est charmante, ce qui ne gâche rien.<span class='apostrophe'> “</span>",
  },
  {
    name: 'Pierre Tchelitcheff',
    commentary:
      "<span class='apostrophe'>“ </span>Sandra est toujours extrêmement attentionnée, agréable et à mon écoute. Ma coupe est parfaite même si j'ai le crâne carré et les cheveux comme des crayons. <br> Cela fait 10 ans que je la suis jusqu'à son installation à cette adresse.<span class='apostrophe'> “</span>",
  },
  {
    name: 'Mouza Clémence',
    commentary:
      "<span class='apostrophe'>“ </span>SUPER !! <br> J'y vais depuis des années et pas question d'aller ailleurs. Sandra (la coiffeuse) est super sympa et comprend toujours très bien mes attentes. J'y ai d'ailleurs emmené plusieurs de mes amies qui ne vont plus que chez elle. <br> J'adore !<span class='apostrophe'> “</span>",
  },
  {
    name: 'Ishak G',
    commentary:
      "<span class='apostrophe'>“ </span>Sandra est une femme magnifique, dans son salon je suis toujours à l'aise. Elle discute avec le client et elle est très respectueuse. <br> Je la connais depuis presque dix ans et elle est toujours égale a elle même, je lui souhaite tout le bonheur et la réussite !<span class='apostrophe'> “</span>",
  },
  {
    name: "Jean-Baptiste Colonna d'Istria",
    commentary:
      "<span class='apostrophe'>“ </span>Super salon ! La patronne est vraiment très gentille, et dotée d’un sens de l’humour impeccable ! Très à l’écoute des souhaits de ses clients, son coup de ciseaux est à chaque fois une réussite ! <br> J’y passe toujours un très bon moment et je ressors à chaque fois plus que satisfait ! <br> À recommander absolument ! <span class='apostrophe'> “</span>",
  },
  {
    name: 'Vincent André Jean Villemer',
    commentary:
      "<span class='apostrophe'>“ </span> La patronne est sympa, souriante malgré le masque et très professionnelle. Bien coiffé et paré pour les vacances au soleil ! <br> Allez-y sans inquiétude. <span class='apostrophe'> “</span>",
  },
  {
    name: 'Béatrice Terrasse',
    commentary:
      "<span class='apostrophe'>“ </span>Sandra est ma coiffeuse depuis 13 ans et elle est très professionnelle tout en étant chaleureuse et agréable avec les clients. J'ai testé d'autres coiffeurs plus près de chez moi mais après plusieurs résultats catastrophiques je mets 1h à aller au salon de Sandra mais le résultat est toujours superbe. Sandra conseille aussi très bien les clients : jamais elle ne vous fera une coupe qui ne vous ira pas !<br>Je recommande chaudement !<span class='apostrophe'> “</span>",
  },
  {
    name: 'Théo',
    commentary:
      "<span class='apostrophe'>“ </span> Sandra est charmante, très pro et toujours à l'heure. Le salon est cosy et il n'y a qu'une seule coiffeuse ce qui permet un suivi de qualité, y compris sur les cheveux compliqués. <br> L'occasion de passer un bon moment sans avoir l'impression d'être pris pour du bétail. <span class='apostrophe'> “</span> <br> <br>",
  },
  {
    name: 'Charlie Verne',
    commentary:
      "<span class='apostrophe'>“ </span>C'est toujours un plaisir de se faire couper les cheveux ici. J'ai pour habitude de traverser Paris pour venir, et j'en ressors toujours beau comme un camion (mais attention, un camion de luxe). <br> Les conseils sont toujours bons et justes, tous les sujets de discussion sont intéressants et on y est traité comme un roi, que ce soit la première fois ou la dixième fois que l'on vient. <br> Je recommande vivement à toutes celles et ceux cherchant une qualité de service exceptionnelle à un bon prix.<span class='apostrophe'> “</span> ",
  },
  {
    name: 'Claire Dravert',
    commentary:
      "<span class='apostrophe'>“ </span>Salon très mignon, Sandra est absolument divine et a su rattraper avec brio un carré plongeant ( qui a coulé depuis ! ) sur mes cheveux de nature frisés/crépus ! <br> Chapeau à elle, je peux exhiber pleinement mes boucles qu'elle a fait revivre ! Très bon conseils pour entretenir mes boucles également !<br> N'hésitez pas ! <span class='apostrophe'> “</span>",
  },
  {
    name: 'Margot Lambard',
    commentary:
      "<span class='apostrophe'>“ </span>Très bonne expérience dans ce salon où je suis allée pour la première fois. La coiffeuse a su écouter mes demandes, me conseiller et me faire une coupe adaptée à ma nature de cheveux et envies. <br>Personne très professionnelle. Un salon dans lequel j’ai envie de retourner. <span class='apostrophe'> “</span>",
  },
  {
    name: 'BarbareSoy',
    commentary:
      "<span class='apostrophe'>“ </span>Coiffeuse très pro et accueillante, elle saura vous donner des conseils judicieux tout en brisant la glace. <br> Coupe impec', horaire de rdv respecté, pour une première visite je ne suis pas du tout déçu, encore merci !<span class='apostrophe'> “</span>",
  },
]

function getRandomNumbers(list) {
  const randomList = []
  for (let i = 1; i < 2; ) {
    const random = Math.floor(Math.random() * list.length)
    if (randomList.includes(random) == false) {
      randomList.push(random)
    }
    if (randomList.length == 5) {
      return randomList
    }
  }
}

const randomCommentList = getRandomNumbers(commentList)

function getComment(nb) {
  for (let i = 0; i < 5; i++) {
    const carouselBtn = document.querySelector(`#button-${i}`)
    carouselBtn.classList.add('classic')
    carouselBtn.classList.remove('select')
  }
  document.querySelector('#name').textContent =
    commentList[randomCommentList[nb]].name
  document.querySelector('.comment').innerHTML =
    commentList[randomCommentList[nb]].commentary
  document.querySelector(`#button-${nb}`).classList.add('select')
  num = nb
}

getComment(0)

function timeout() {
  setTimeout(function () {
    if (num < randomCommentList.length - 1) num += 1
    else num = 0
    getComment(num)
    timeout()
  }, 10000)
}

timeout()

// 3 firsts products from catalogue
const baseUrl = 'http://localhost:1337'
const template = document.querySelector('template#product')
const products = document.querySelector('.products')

fetch(`${baseUrl}/api/produits?populate=*`)
  .then((res) => res.json())
  .then((data) => {
    const randomProductList = getRandomNumbers(data.data)
    for (let i = 0; i < 3; i++) {
      const clone = template.content.cloneNode(true)
      const product = clone.querySelector('.product')
      const img = clone.querySelector('#product-image')
      const brand = clone.querySelector('#brand-product')
      const price = clone.querySelector('#price-product')
      const describe1 = clone.querySelector('#describe1')
      const describe2 = clone.querySelector('#describe2')

      product.classList.add(
        data.data[randomProductList[i]].attributes.categorie,
      )
      img.src = `${
        baseUrl +
        data.data[randomProductList[i]].attributes.image.data[0].attributes.url
      }`
      brand.textContent = data.data[randomProductList[i]].attributes.marque
      price.textContent = `${data.data[randomProductList[i]].attributes.prix} €`
      describe1.textContent =
        data.data[randomProductList[i]].attributes.descriptif1
      describe2.textContent =
        data.data[randomProductList[i]].attributes.descriptif2

      products.appendChild(clone)
    }
  })
