// ----------------------Test modifier le style via JS

const titre = document.getElementById("titre");
const txt = document.body.getElementsByTagName("p");
const button = document.querySelector("button");

//--------Mis dans un tableau avec Array.from:
let tabText = Array.from(txt);
//------------Appliquer du CSS via .map &.style :
// tabText.map(x => x.style.color = "red");
// tabText.map(x => x.style.border= "10px cyan solid");
// tabText.map(x => x.style.boxShadow= "0px 0px 20px cyan");



// titre.style.color = "cyan";
// titre.style.fontFamily = "Arial";
// titre.style.fontSize= "38px";

txt[1].style.fontSize= "52px";
txt[1].style.fontFamily= "Helvetica";
txt[1].style.backgroundColor= "linear-gradient(to left top, blue, red)";

let newTxt = document.createElement("p");
newTxt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus molestias, explicabo voluptatem rerum, doloribus sit odit harum a consequatur nulla ab minus eius nemo?`;
newTxt.style.fontSize = "52px";
newTxt.style.color = "orange";

document.body.appendChild(newTxt);


// -----------------------------Test addEventListener + classList

txt[3].addEventListener("click", function() {
    txt[2].classList.add("maCouleur");
});

button.addEventListener("click", function() {
    titre.classList.add("superChange");
});


//--------------------------- Test removeEventListener

const link = document.querySelector("a");

function monClic(){
    console.log("Bonjour!");
    link.removeEventListener("click", monClic);
}

link.addEventListener("click", monClic);


//--------------------------Exo 14 saisis au clavier
// Créez un écouteur d’événement permettant de récupérer les caractères saisis au clavier par l’utilisateur.
// Lorsque le nombre de caractères atteint une limite (de votre choix), bloquez toute nouvelle saisie au clavier.

//apparemment la solution c'est ça, je suis une merde

const resultat = document.querySelector("#recup");
let compteur = 0;
const limite = 10;
// let result = "";

function monClavier(e) {

    if (e.key.length === 1) {
        compteur++;

        resultat.textContent += e.key;
        // console.log(result += e.key);

        if (compteur >= limite) {
            document.removeEventListener("keydown", monClavier);
        }
    }
}
document.addEventListener("keydown", monClavier);

//---------------Exo 15, je sais pas ce qu'on fait, de toute façon j'y comprends rien

addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    let createImage = document.createElement("img");
    createImage.setAttribute("src", "https://picsum.photos/50/50");
    createImage.style.position = "absolute";
    createImage.style.top = (y-(createImage.width/2)) + "px";
    createImage.style.left = (x-(createImage.height/2)) + "px";
    document.body.appendChild(createImage);
});
