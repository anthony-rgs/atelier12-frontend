womenBorder = document.querySelector("#women")
womenBox = document.querySelector("#women-price")

menBorder = document.querySelector("#men")
menBox = document.querySelector("#men-price")

womenBorder.addEventListener('click', () => {
    womenBorder.classList.add('active');
    menBorder.classList.remove('active');
    womenBox.classList.remove('hidden')
    menBox.classList.add('hidden');
    womenBox.classList.add("visible")
});

menBorder.addEventListener('click', () => {
    menBorder.classList.add('active');
    womenBorder.classList.remove('active');
    womenBox.classList.add('hidden');
    menBox.classList.remove('hidden');
    menBox.classList.add("visible")
});


let person = document.querySelector(".name");
let comment = document.querySelector(".comment");

let comment1 = document.getElementById("b1");
let comment2 = document.getElementById("b2");
let comment3 = document.getElementById("b3");
let comment4 = document.getElementById("b4");
let comment5 = document.getElementById("b5");

let commentIndex = 0
let commentList = [{
        name: "Charlie Verne",
        commentary: "<span>\“ </span>C'est toujours un plaisir de se faire couper les cheveux ici. J'ai pour habitude de traverser Paris pour venir, et j'en ressors toujours beau comme un camion (mais attention, un camion de luxe). <br> Les conseils sont toujours bons et justes, tous les sujets de discussion sont intéressants et on y est traité comme un roi, que ce soit la première fois ou la dixième fois que l'on vient. <br> Je recommande vivement à toutes celles et ceux cherchant une qualité de service exceptionnelle à un bon prix.<span> \“</span> <br><br>",
    },
    {
        name: "Claire Dravert",
        commentary: "<span>\“ </span>Salon très mignon, Sandra est absolument divine et a su rattraper avec brio un carré plongeant ( qui a coulé depuis ! ) sur mes cheveux de nature frisés/crépus ! <br> Chapeau à elle, je peux exhiber pleinement mes boucles qu'elle a fait revivre ! Très bon conseils pour entretenir mes boucles également !<br> N'hésitez pas ! <span> \“</span> <br> <br>",
    },
    {
        name: "Margot Lambard",
        commentary: "<span>\“ </span>Très bonne expérience dans ce salon où je suis allée pour la première fois. La coiffeuse a su écouter mes demandes, me conseiller et me faire une coupe adaptée à ma nature de cheveux et envies. <br>Personne très professionnelle. Un salon dans lequel j’ai envie de retourner. <span> \“</span><br> <br><br> <br>",
    },
    {
        name: "Béatrice Terrasse",
        commentary: "<span>\“ </span>Sandra est ma coiffeuse depuis 13 ans et elle est très professionnelle tout en étant chaleureuse et agréable avec les clients. J'ai testé d'autres coiffeurs plus près de chez moi mais après plusieurs résultats catastrophiques je mets 1h à aller au salon de Sandra mais le résultat est toujours superbe. Sandra conseille aussi très bien les clients : jamais elle ne vous fera une coupe qui ne vous ira pas !<br>Je recommande chaudement !<span> \“</span>  <br> <br> ",
    },
    {
        name: "Philippe Negrier",
        commentary: "<span>\“ </span>L'accueil est souriant et bienveillant mais le professionnalisme de Sandra la propriétaire et officiante est plus qu'à la hauteur, que ce soit pour un homme attentif comme moi ou pour ma fille adolescente exigeante, versatile et éternelle insatisfaite, c'est juste le signe d'une vraie maîtrise de l'art et d'une qualité de conseil juste, pertinente et respectueuse des envies. Je n'en ai pas changé depuis 15 ans et avant même d'être propriétaire de son salon, elle avait déjà cet engagement et ce souci de qualité et de respect de ses client(e)s. <br> Bravo et merci Sandra. <span> \“</span>",
    }
]

function loadComment(commentIndex) {
    person.textContent = commentList[commentIndex].name;
    comment.innerHTML = commentList[commentIndex].commentary;
}

loadComment(0)


function clearBilles() {
    comment1.style.background = "#B8B8B8"
    comment2.style.background = "#B8B8B8"
    comment3.style.background = "#B8B8B8"
    comment4.style.background = "#B8B8B8"
    comment5.style.background = "#B8B8B8"
}

function commentNumber1() {
    commentIndex = 0;
    loadComment(commentIndex);
    clearBilles()
    comment1.style.background = "#5C61DA"
}

function commentNumber2() {
    commentIndex = 1;
    loadComment(commentIndex);
    clearBilles()
    comment2.style.background = "#5C61DA"
}

function commentNumber3() {
    commentIndex = 2;
    loadComment(commentIndex);
    clearBilles()
    comment3.style.background = "#5C61DA"
}

function commentNumber4() {
    commentIndex = 3;
    loadComment(commentIndex);
    clearBilles()
    comment4.style.background = "#5C61DA"
}

function commentNumber5() {
    commentIndex = 4;
    loadComment(commentIndex);
    clearBilles()
    comment5.style.background = "#5C61DA"
}