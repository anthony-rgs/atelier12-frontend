import type { Review } from '@/types/review'

// Ported from the previous site's Google reviews snapshot.
// TODO: replace with a live fetch from the Google Places API once it's wired up,
// filtered to 5-star reviews only — see services/api.ts.
const rawReviews: Omit<Review, 'id' | 'rating'>[] = [
  {
    name: 'Philippe Negrier',
    commentary:
      "L'accueil est souriant et bienveillant, le professionnalisme de Sandra est plus qu'à la hauteur, que ce soit pour un homme attentif comme moi ou pour ma fille adolescente, éternelle insatisfaite. Je n'en ai pas changé depuis 15 ans et avant même d'être propriétaire de son salon, elle avait déjà cet engagement, ce souci de qualité et de respect de ses client(e)s.",
  },
  {
    name: 'David Stevens',
    commentary:
      "Je vous conseille vivement L'Atelier 12. Tout y est : l'accueil, l'écoute, les conseils, le professionnalisme et des tarifs très corrects !\nSandra est adorable. N'hésitez surtout pas.",
  },
  {
    name: 'Hervé Prade',
    commentary:
      "Un super salon avec une super coiffeuse (Sandra) et un accueil chaleureux !! Bref c'est devenu mon adresse pour me faire couper les cheveux à Paris.\nN'hésitez pas vous ne le regretterez pas !",
  },
  {
    name: 'Catherine Poyet',
    commentary:
      'Ce salon de coiffure tenu par Sandra est une excellente adresse : accueil super et compétence parfaite.\nCourez-y vous faire coiffer / couper les cheveux !',
  },
  {
    name: 'Romain Dufrene',
    commentary:
      "Vous cherchez un salon professionnel, une coiffeuse attentionnée, disponible, souriante et s'adaptant aux demandes de ses clients ?\nN'attendez plus et foncez à l'Atelier !",
  },
  {
    name: 'Karine Recci',
    commentary:
      'Je suis passée dernièrement pour faire des mèches, vraiment top ! Et la patronne Sandra est vraiment géniale.\nJe recommande !!',
  },
  {
    name: 'Julie Fraysse',
    commentary:
      'Super salon que je recommande vivement !\nJe remercie Sandra pour son écoute, sa bonne humeur et son professionnalisme !',
  },
  {
    name: 'Sensitive shiatsu',
    commentary:
      'Je suis un client fidèle depuis plus de 10 ans (ça se fête !). Elle répond à toutes mes demandes et elle est de bons conseils quand il faut.\nQue demander de plus !',
  },
  {
    name: 'Hélène Malaroda',
    commentary:
      "Très professionnelle, à la fois à l'écoute de vos désirs mais aussi de bon conseil.\nJe recommande vivement !",
  },
  {
    name: 'Martine Metayer',
    commentary:
      "La dirigeante de ce salon de coiffure est très professionnelle et à l'écoute de ses clients !",
  },
  {
    name: 'Bernadette',
    commentary:
      "Je l'adore ! Sandra (la responsable du salon) s'occupait de mes cheveux dans le salon où elle était employée pendant des années.\nJe n'ai pas hésité une seule seconde pour la suivre à l'autre bout de Paris lorsqu'elle a ouvert son salon. Je lui confie ma chevelure tous les mois avec toutes mes envies plus ou moins saugrenues. Allez-y vous ne serez pas déçu.",
  },
  {
    name: 'Olivier Le Marois',
    commentary:
      "L'Atelier est mon salon de coiffure depuis 4 ans. Le résultat est toujours impeccable, parfaitement conforme à mes attentes, pour un prix plus que raisonnable.\nEt la patronne est charmante, ce qui ne gâche rien.",
  },
  {
    name: 'Pierre Tchelitcheff',
    commentary:
      "Sandra est toujours extrêmement attentionnée, agréable et à mon écoute. Ma coupe est parfaite même si j'ai le crâne carré et les cheveux comme des crayons.\nCela fait 10 ans que je la suis jusqu'à son installation à cette adresse.",
  },
  {
    name: 'Mouza Clémence',
    commentary:
      "SUPER !!\nJ'y vais depuis des années et pas question d'aller ailleurs. Sandra (la coiffeuse) est super sympa et comprend toujours très bien mes attentes.\nJ'y ai d'ailleurs emmené plusieurs de mes amies qui ne vont plus que chez elle. J'adore !",
  },
  {
    name: 'Ishak G',
    commentary:
      "Sandra est une femme magnifique, dans son salon je suis toujours à l'aise. Elle discute avec le client et elle est très respectueuse.\nJe la connais depuis presque dix ans et elle est toujours égale à elle même, je lui souhaite tout le bonheur et la réussite !",
  },
  {
    name: 'Jean-Baptiste',
    commentary:
      "Super salon ! La patronne est vraiment très gentille et dotée d'un sens de l'humour impeccable. Très à l'écoute des souhaits de ses clients son coup de ciseaux est à chaque fois une réussite.\nJ'y passe toujours un très bon moment et j'y ressors toujours plus que satisfait. À recommander absolument !",
  },
  {
    name: 'Vincent Villemer',
    commentary:
      'La patronne est sympa, souriante malgré le masque et très professionnelle. Bien coiffé et paré pour les vacances au soleil !\nAllez-y sans inquiétude.',
  },
  {
    name: 'Béatrice Terrasse',
    commentary:
      "Sandra est ma coiffeuse depuis 13 ans et elle est très professionnelle tout en étant chaleureuse et agréable avec les clients. J'ai testé d'autres coiffeurs plus près de chez moi mais après plusieurs résultats catastrophiques je préfère mettre 1h à aller à ce salon, le résultat est toujours superbe.\nJe recommande chaudement !",
  },
  {
    name: 'Théo',
    commentary:
      "Sandra est charmante, très pro et toujours à l'heure. Le salon est cosy et il n'y a qu'une seule coiffeuse ce qui permet un suivi de qualité, y compris sur les cheveux compliqués.\nL'occasion de passer un bon moment sans avoir l'impression d'être pris pour du bétail.",
  },
  {
    name: 'Charlie Verne',
    commentary:
      "C'est toujours un plaisir de se faire couper les cheveux ici. J'ai pour habitude de traverser Paris pour venir, et j'en ressors toujours beau comme un camion (mais attention, un camion de luxe).\nJe recommande vivement à toutes celles et ceux cherchant une qualité de service exceptionnelle à un bon prix.",
  },
  {
    name: 'Claire Dravert',
    commentary:
      "Salon très mignon, Sandra est absolument divine et a su rattraper avec brio un carré plongeant (qui a coulé depuis !) sur mes cheveux de nature frisés/crépus !\nChapeau à elle, je peux exhiber pleinement mes boucles qu'elle a fait revivre ! Très bons conseils pour entretenir mes boucles également.\nN'hésitez pas !",
  },
  {
    name: 'Margot Lambard',
    commentary:
      "Très bonne expérience dans ce salon où je suis allée pour la première fois.\nLa coiffeuse a su écouter mes demandes, me conseiller et me faire une coupe adaptée à ma nature de cheveux et envies. Personne très professionnelle.\nUn salon dans lequel j'ai envie de retourner.",
  },
  {
    name: 'BarbareSoy',
    commentary:
      "Coiffeuse très pro et accueillante, elle saura vous donner des conseils judicieux tout en brisant la glace.\nCoupe impec', horaire de rdv respecté, pour une première visite je ne suis pas du tout déçu, encore merci !",
  },
  {
    name: 'Nicolas Bergeron',
    commentary:
      "Première expérience, un moment très agréable ! Merci à la personne qui s'est occupée de moi, le résultat est très satisfaisant !\nJ'y retournerai et je recommande vivement.",
  },
  {
    name: 'Guillaume Peignon',
    commentary: 'Des coupes parfaites et des bonbons pour les enfants. Bref, on sort avec le sourire !',
  },
  {
    name: 'Patrice Bensimon',
    commentary:
      "Salon à la propreté irréprochable. Je suis coiffé par sa propriétaire depuis plus de 15 ans et j'y vais les yeux fermés.\nLa coupe correspond toujours à mes attentes, dans la bonne humeur et la bienveillance.",
  },
]

export const reviews: Review[] = rawReviews.map((review, index) => ({
  ...review,
  id: String(index),
  rating: 5,
}))
