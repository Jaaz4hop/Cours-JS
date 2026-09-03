//---Je récupère mes élèments du HTML avec lesquels j'ai besoin d'intéragir.
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const faceContainer = document.getElementById("faceContainer");
const faceImg = document.getElementById("faceImg");
const black = document.getElementById("blackColor");
const yellow = document.getElementById("yellowColor");
const cyan = document.getElementById("cyanColor");



//---Je dois trouver un moyen d'intégrer les images de coiffures sur le bonhome et que ça soit bien cadré...

//Je regarde dans ma constante face ses attributs:
console.log(faceImg);


/*N'est plus utilisé car pas la bonne solution

Les données qui m'interessent sont offsetTop:80 et offsetLeft:123 pour pouvoir placer les cheveux correctements.

const posX = faceImg.offsetLeft;
const posY = faceImg.offsetTop;

console.log(posX);  Devrait correspondre à 80px, mais ce n'est pas le cas :(
console.log(posY);  Devrait correspondre à 123px mais ce n'est pas le cas :(

newHair.style.top = `${posY}px`;
newHair.style.left = `${posX}px`;
newHair.style.position = "absolute";

Apparemment ces données ne sont pas les bonnes à exploiter car elles ne sont pas relatives à l'écran mais seulement par rapport au premier parent avec position dans son style ce qui est source d'erreurs.
*/


// Je créer la constante newHair pour l'ajout de cheveux sur le visage et lui applique un attribut src pour test.
let newHair = document.createElement("img");
newHair.src = "asset/img/hair-blond-1.png";

//La solution serait de d'abord créer des classes en CSS(voir style.css) et ensuite d'ajouter cette classe en JS.
newHair.classList.add("hair-style");
faceContainer.appendChild(newHair);



//---Je dois faire en sorte que quand je clique sur une flèche droite ou gauche, la coiffure du personnage change et que ça boucle.


// Je déclare un compteur À L'EXTÉRIEUR de l'écouteur d'événement
let counter = 1;

leftArrow.addEventListener("click", function () {
    // On passe à l'image suivante (ou boucle sur 1 si on dépasse 3)
    counter = counter < 3 ? counter + 1 : 1;
    // On met simplement à jour la source de l'image
    newHair.src = `asset/img/hair-${currentColor}-${counter}.png`;
});

rightArrow.addEventListener("click", function () {
    counter = counter > 1 ? counter - 1 : 3;
    newHair.src = `asset/img/hair-${currentColor}-${counter}.png`;
});



//---Je dois faire en sorte que quand je clique sur un carré de couleur(div), cette couleur soit sélectionnée et appliquée à la coiffure.


//Je créer une fonction pour récupérer les codes couleurs RGB de mes div.
function getRGB (color) {
    //La methode getComputedStyle utilisée permet de récupérer les propriétés css d'un élèment après que le navigateur ait chargé les infos. On peut pas utiliser "maDiv.style.backgroundColor" car ça ne fonctionne que si la couleur a été définie directement dans l'attribut style en HTML
    const styleDiv = window.getComputedStyle(color);
    return styleDiv.backgroundColor;
}

console.log(getRGB(black));
console.log(getRGB(yellow));
console.log(getRGB(cyan));

//Alors c'est bien c'est super tout ça mais je viens de me rendre compte que l'on ne change pas directement les couleurs des coiffures mais plutot qu'on sélectionne des images avec couleur prédéfinies.Donc tout ce qui est au dessus ne me sers à rien là dans ce cas précis.Je laisse en non-commenté parce que quand même c'est cool :).


black.addEventListener("click", function (){
    currentColor = "black";
    newHair.src = `asset/img/hair-${currentColor}-${counter}.png`;
});

yellow.addEventListener("click", function (){
    currentColor = "blond";
    newHair.src = `asset/img/hair-${currentColor}-${counter}.png`;
});

cyan.addEventListener("click", function (){
    currentColor = "turquoise";
    newHair.src = `asset/img/hair-${currentColor}-${counter}.png`;
});

//Du coup mes deux élèments séparemment fonctionne dans le principe, sauf que quand je clique sur les flèches je n'affiche ques les coiffures blondes. Comment je fais pour fusionner les deux fonctionnalités...

//On va stocker dans une variable la couleur sélectionner et la réapliquer dans tout nos changements d'attribut src.
let currentColor = "blond";