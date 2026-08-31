//------------Exemple setInterval
const titre = document.querySelector("h1");
let timer = 3;

titre.addEventListener("click", function() {
    const countDown = setInterval(function() {
        if(timer > 0) {
            titre.textContent = timer;
        } else {
            titre.textContent = "GO GO GO";
            clearInterval(countDown)
        }
        timer--;
        console.log(timer);
    }, 2000);
})

//-----------Exemple includes et join
const leTexte = document.querySelector("textarea");
const txt = [];
const emoji = ["😁","😅","🤣","😂","🙂","🙃","🫠","😉","🥰"];

leTexte.addEventListener("input", function(unEvent) {
    console.log(unEvent);
    const touche = unEvent.data;

    if(!emoji.includes(touche)) {
        txt.push(touche);
    }
    console.log(txt.join("-")); 
});

//-----------Exo 17 désactiver un bouton

console.log(leTexte);
const button = document.querySelector("button");
leTexte.addEventListener("input", function (){
    const maxInput = 5;
    if(leTexte.textLength>maxInput) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
})


// Exemple d'utilisation du localStorage

//const leTexte = document.querySelector("textarea");
const rendu = document.querySelector("div");

// 1. Au chargement on récupère le texte et on l'affiche partout
leTexte.value = localStorage.getItem("duTexte");
rendu.textContent = leTexte.value;

// 2. À la saisie on sauvegarde et on met à jour la div en temps réel
leTexte.addEventListener("keyup", function () {
    localStorage.setItem("duTexte", leTexte.value);
    rendu.textContent = leTexte.value;
});