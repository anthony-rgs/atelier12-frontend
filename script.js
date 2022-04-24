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
      "<span>“ </span>L'accueil est souriant et bienveillant mais le professionnalisme de Sandra la propriétaire et officiante est plus qu'à la hauteur, que ce soit pour un homme attentif comme moi ou pour ma fille adolescente exigeante, versatile et éternelle insatisfaite, c'est juste le signe d'une vraie maîtrise de l'art et d'une qualité de conseil juste, pertinente et respectueuse des envies. Je n'en ai pas changé depuis 15 ans et avant même d'être propriétaire de son salon, elle avait déjà cet engagement et ce souci de qualité et de respect de ses client(e)s. <span> “</span>",
  },
  {
    name: 'David Stevens',
    commentary:
      "<span>“ </span>Je vous conseille vivement L'Atelier 12. <br> Tout y est : l'accueil, l'écoute, les conseils, le professionnalisme et des tarifs très corrects ! <br> Sandra est adorable. N'hésitez surtout pas.<span> “</span>",
  },
  {
    name: 'Hervé Prade',
    commentary:
      "<span>“ </span> Un super salon avec une super coiffeuse (Sandra) et un accueil chaleureux !! <br> Bref c'est devenu mon adresse pour me faire couper les cheveux à Paris. <br> N'hésitez pas vous ne le regretterez pas !<span> “</span>",
  },
  {
    name: 'Catherine Poyet',
    commentary:
      '<span>“ </span>Ce salon de coiffure tenu par Sandra est une excellente adresse : accueil super et compétence parfaite. <br> Courez-y vous faire coiffer / couper les cheveux !<span> “</span>',
  },
  {
    name: 'Romain Dufrene',
    commentary:
      "<span>“ </span> Vous cherchez un salon professionnel, une coiffeuse attentionnée, disponible souriante et s'adaptant aux demandes de ses clients ? <br> N'attendez plus et foncez à l'Atelier !<span> “</span>",
  },
  {
    name: 'Karine Recci',
    commentary:
      '<span>“ </span>Je suis passée dernièrement pour faire des mèches, vraiment top ! Et la patronne Sandra est vraiment géniale, je recommande !!<span> “</span>',
  },
  {
    name: 'Julie Fraysse',
    commentary:
      '<span>“ </span>Super salon que je recommande vivement! <br> Je remercie Sandra pour son écoute, sa bonne humeur et son professionnalisme ! <span> “</span>',
  },
  {
    name: 'Sensitive shiatsu',
    commentary:
      '<span>“ </span>Je suis un client fidèle depuis plus de 10 ans (ça se fête!). <br> Elle répond à toutes mes demandes et elle est de bons conseils quand il faut. <br> Que demander de plus !  <span> “</span>',
  },
  {
    name: 'Hélène Malaroda',
    commentary:
      "<span>“ </span>Très professionnelle, à la fois à l'écoute de vos désirs mais aussi de bon conseil. <br> Je recommande vivement ! <span> “</span>",
  },
  {
    name: 'Martine Metayer',
    commentary:
      '<span>“ </span> La dirigeante de ce salon de coiffure est très professionnelle et à l ecoute de ses clients !<span> “</span>',
  },
  {
    name: 'Bernadette55',
    commentary:
      "<span>“ </span>Je l'adore! Sandra (la responsable du salon) s'occupait de mes cheveux dans le salon où elle était employée pendant des années. <br> Je n'ai pas hésité une seule seconde pour la suivre à l'autre de bout de Paris lorsqu'elle a ouvert son propre salon. Je lui confie ma chevelure tous les mois avec toutes mes envies plus ou moins saugrenues mais qu'elle respecte. Allez y vous ne serez pas déçu. De plus ses tarifs sont très corrects.<span> “</span>",
  },
  {
    name: 'Olivier Le Marois',
    commentary:
      "<span>“ </span>L'Atelier est mon salon de coiffure depuis 4 ans. <br> Le résultat est toujours impeccable, parfaitement conforme à mes attentes, pour un prix plus que raisonnable. Et la patronne est charmante, ce qui ne gâche rien.<span> “</span>",
  },
  {
    name: 'Pierre Tchelitcheff',
    commentary:
      "<span>“ </span>Sandra est toujours extrêmement attentionnée, agréable et à mon écoute. <br> Ma coupe est parfaite même si j'ai le crâne carré et les cheveux comme des crayons. <br> Cela fait 10 ans que je la suis jusqu'à son installation à cette adresse.<span> “</span>",
  },
  {
    name: 'Mouza Clémence',
    commentary:
      "<span>“ </span>SUPER !! <br> J'y vais depuis des années et pas question d'aller ailleurs. Sandra (la coiffeuse) est super sympa et comprend toujours très bien mes attentes. J'y ai d'ailleurs emmené plusieurs de mes amies qui ne vont plus que chez elle. <br> J'adore !<span> “</span>",
  },
  {
    name: 'Ishak G',
    commentary:
      "<span>“ </span>Sandra est une femme magnifique, dans son salon je suis toujours à l'aise. Elle discute avec le client et elle est très respectueuse. <br> Je la connais depuis presque dix ans et elle est toujours égale a elle même, je lui souhaite tout le bonheur et la réussite !<span> “</span>",
  },
  {
    name: "Jean-Baptiste Colonna d'Istria",
    commentary:
      '<span>“ </span>Super salon ! La patronne est vraiment très gentille, et dotée d’un sens de l’humour impeccable ! Très à l’écoute des souhaits de ses clients, son coup de ciseaux est à chaque fois une réussite ! <br> J’y passe toujours un très bon moment et je ressors à chaque fois plus que satisfait ! <br> À recommander absolument ! <span> “</span>',
  },
  {
    name: 'Vincent André Jean Villemer',
    commentary:
      '<span>“ </span> La patronne est sympa, souriante malgré le masque et très professionnelle. <br> Bien coiffé et paré pour les vacances au soleil ! <br> Allez-y sans inquiétude. <span> “</span>',
  },
  {
    name: 'Béatrice Terrasse',
    commentary:
      "<span>“ </span>Sandra est ma coiffeuse depuis 13 ans et elle est très professionnelle tout en étant chaleureuse et agréable avec les clients. J'ai testé d'autres coiffeurs plus près de chez moi mais après plusieurs résultats catastrophiques je mets 1h à aller au salon de Sandra mais le résultat est toujours superbe. Sandra conseille aussi très bien les clients : jamais elle ne vous fera une coupe qui ne vous ira pas !<br>Je recommande chaudement !<span> “</span>",
  },
  {
    name: 'Théo',
    commentary:
      "<span>“ </span> Sandra est charmante, très pro et toujours à l'heure. <br> Le salon est cosy et il n'y a qu'une seule coiffeuse ce qui permet un suivi de qualité, y compris sur les cheveux compliqués. <br> L'occasion de passer un bon moment sans avoir l'impression d'être pris pour du bétail. <span> “</span> <br> <br>",
  },
  {
    name: 'Charlie Verne',
    commentary:
      "<span>“ </span>C'est toujours un plaisir de se faire couper les cheveux ici. J'ai pour habitude de traverser Paris pour venir, et j'en ressors toujours beau comme un camion (mais attention, un camion de luxe). <br> Les conseils sont toujours bons et justes, tous les sujets de discussion sont intéressants et on y est traité comme un roi, que ce soit la première fois ou la dixième fois que l'on vient. <br> Je recommande vivement à toutes celles et ceux cherchant une qualité de service exceptionnelle à un bon prix.<span> “</span> ",
  },
  {
    name: 'Claire Dravert',
    commentary:
      "<span>“ </span>Salon très mignon, Sandra est absolument divine et a su rattraper avec brio un carré plongeant ( qui a coulé depuis ! ) sur mes cheveux de nature frisés/crépus ! <br> Chapeau à elle, je peux exhiber pleinement mes boucles qu'elle a fait revivre ! Très bon conseils pour entretenir mes boucles également !<br> N'hésitez pas ! <span> “</span>",
  },
  {
    name: 'Margot Lambard',
    commentary:
      '<span>“ </span>Très bonne expérience dans ce salon où je suis allée pour la première fois. La coiffeuse a su écouter mes demandes, me conseiller et me faire une coupe adaptée à ma nature de cheveux et envies. <br>Personne très professionnelle. Un salon dans lequel j’ai envie de retourner. <span> “</span>',
  },
  {
    name: 'BarbareSoy',
    commentary:
      "<span>“ </span>Coiffeuse très pro et accueillante, elle saura vous donner des conseils judicieux tout en brisant la glace. <br> Coupe impec', horaire de rdv respecté, pour une première visite je ne suis pas du tout déçu, encore merci !<span> “</span>",
  },
]

// function getRandomComment() {
//   const randomList = []
//   for (let i = 1; i < 6; i++) {
//     const randomComment = Math.floor(Math.random() * commentList.length)
//     randomList.push(randomComment)
//   }
//   console.log(randomList)
// }

// getRandomComment()

let person = document.querySelector('.name')
let comment = document.querySelector('.comment')
let num = 1

function getComment(nb) {
  for (let i = 1; i < 6; i++) {
    const carouselBtn = document.querySelector(`#button-${i}`)
    carouselBtn.classList.add('classic')
    carouselBtn.classList.remove('select')
  }
  person.textContent = commentList[nb - 1].name
  comment.innerHTML = commentList[nb - 1].commentary
  let carouselBtnSelect = document.querySelector(`#button-${nb}`)
  carouselBtnSelect.classList.add('select')
  num = nb
}

getComment(num)

// setTimeout(function () {
//   const newNum = num + 1
//   getComment(newNum)
// }, 10000)
