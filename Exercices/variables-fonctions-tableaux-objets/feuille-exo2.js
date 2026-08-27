/*Exercice 11 : Calculer une moyenne + For
Créer une fonction moyenne qui prend en paramètre un array de plusieurs notes et retourne la moyenne calculée.
Dans cette fonction, on crée une boucle pour faciliter le calcul de la moyenne.
Afficher en console un appel à la fonction moyenne en lui passant un tableau de plusieurs notes.*/

function moyenne(tab) {
    let sum = 0;
    for(let i=0; i<tab.length ; i++){
        sum += tab[i];
    }
    return sum/tab.length;
}

console.log(moyenne([12,15,7,20,12,14,13,10,19,6,14,18,17,12]));

// Petit essai sur les chaines de caractères

const voiture = {
    marque: "Toyota",
    model: "GT",
    vitesse: 280
};

/*voiture = {
    marque: "BMW",
    model: "M3",
    vitesse: 300
}
*/

voiture.vitesse = 350;

let text = `La Marque de la voiture est ${voiture.marque ? voiture.marque : "Non renseignée"} et sa vitesse et de ${voiture.vitesse ? voiture.vitesse : "Non renseignée"}`;

console.log(text);

/*Exo 12 Températures + For + condition
Créer un programme qui prend en paramètre un array de plusieurs températures.
Créer une boucle pour parcourir toutes les températures.

Pour chaque température :
afficher "Il fait chaud" si elle est supérieure ou égale à 25;
afficher "Il fait frais" si elle est comprise entre 10 et 24;
afficher "Il fait froid" si elle est inférieure à 10.

Utiliser les template strings pour afficher la température avec le message correspondant.
*/

function tempInfo(tab) {
    for(let i=0; i<tab.length ; i++){
        if(tab[i] >= 25) {
            console.log(`Il fait ${tab[i]}° actuellement, il fait chaud`);
        }else if (tab[i]>=10) {
            console.log(`Il fait ${tab[i]}° actuellement, il fait frais`);
        } else {
            console.log(`Il fait ${tab[i]}° actuellement, il fait froid`);
        }
    }
}

tempInfo([12,15,22,27,31,29,25,20,15,13,9,8,7]);

// Petit test destructuring

const {model, marque, vitesse, température = 90} = voiture;
console.log(vitesse, marque, température);

// 2eme Petit test destructuring

function melange(tab) {
    for(let i = 0 ; i<tab.length ; i++) {
        let random = Math.floor(Math.random()*tab.length);
        [tab[i], tab[random]] = [tab[random], tab[i]];
    }
    return tab;
}

console.log(melange([1,2,3,4,5,6]));

// Spread Opérator

let groupe1=["Marion", "Victor"];
let groupe2=["Margot", "Moineaux"];

let liste = ["Perdraux", ...groupe2, ...groupe1];
let liste2 = liste

liste.push("Paleron");
liste2.push("Abeille");
console.log(liste);
console.log(liste2);


// DOM

const titre = document.getElementsByTagName("h1");
const paragraphe = document.getElementsByTagName("p");
const olist = document.getElementsByTagName("ol")



// DOM Query selector()

const titre2 = document.querySelector("h1");
const p1 = document.querySelector("p");
const paragraph2 = document.querySelector("p");
const p2 = document.querySelectorAll("#p2");

console.log(titre2);
console.log(p1);
console.log(p2);
console.log(paragraph2);

//DOM insertBefore()

const titre3 = document.getElementById("titre");
const txt = document.body.getElementsByTagName("p");

document.body.insertBefore(txt[0], titre3);

// DOM createElement()

function ajoutTexte(pseudo, duTexte) {
    const newTxt = document.createElement("p");

    newTxt.innerHTML = `<strong>${pseudo}</strong> : ${duTexte}`;
    document.body.appendChild(newTxt);
}

ajoutTexte("Zeldo", "22 ans, aventurier à ses heures perdues");
ajoutTexte("Donald", "56 ans, une espèce de gros canard");
ajoutTexte("James", "35 ans, roliste mais a un rôle caché...");
ajoutTexte("Mathieu", "36 ans, gardien de la guilde, mène une double vie");
ajoutTexte("Mario", "52 ans, plombier et égérie d'une marque de salopette");
ajoutTexte("Mohamed", "32 ans, énorme swinger");