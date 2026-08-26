// Exo cartes variables

let carteA = "Tortank";
let carteB = "Dracaufeu";

console.log(carteA, carteB);

let save = carteA;

carteA = carteB;
carteB = save;

console.log(carteA, carteB);

// Exo calculs et variables

let a = 5;
a += 10;

console.log(a);

a *= 2;

console.log(a);

a -= 4;

console.log(a);

a /= 2;

console.log(a);

let b = 10;

a += b;

console.log(a);

// Exo concaténation

let name1 = "Robert";
let age = "57 ans";

let welcomingWords = "Bonjour " + name1 + " tu as " + age + " aujourd'hui, c'est la fiesta !";

console.log(welcomingWords);

// Exo caractères

let name2 = "Balthazar";

console.log(name2.length);
console.log(name2[name2.length-1]);

// Exo caractères-initiales

let name3 = "Tirelot";
let firstName = "Marion";
let initials = name3[0]+firstName[0];
let tab = [name3, firstName, initials];

console.log(tab);

// Exo fonctions

let noteA = 17;
let noteB = 8;

function moyenne(a,b) {
    return (a+b)/2;
}

let moy = moyenne(noteA, noteB);

console.log(moy);
console.log(moyenne(17, 8));
console.log(moyenne(noteA, noteB));

// Exo Math.random

let randomNumber = Math.floor(Math.random()*101);

console.log(randomNumber);

// Exo if else et booléens

function Mention(array) {
    let sum = 0;
    for(let i = 0; i<array.length ; i++) {
        sum += array[i];
    }
    let moy = sum/array.length;
    if(moy >= 15) {
        return "Très Bien";
    } else if (moy >= 10) {
        return "Assez Bien";
    } else {
        return "refus";
    }
}

let notes = [15,17,13,16,19,18,18,18,12,10,14,16,18];
let notes2 = [10,11,13,12,14,11,12,13,11,10,14,11,12];
let notes3 = [7,2,8,10,5,4,3,6,7,8,9,10,1];

console.log(Mention(notes));
console.log(Mention(notes2));
console.log(Mention(notes3));

// Exo Prompt

//Number ou + servent a transformer une chaine de caractère en nombre.

let letterBox1 = Number(prompt("Entrez un premier nombre svp"));
let letterBox2 = Number(prompt("Entrez un deuxième nombre svp"));
//let letterBox1 = +prompt("Entrez un premier nombre svp"));
//let letterBox2 = +prompt("Entrez un deuxième nombre svp"));

if(isNaN(letterBox1) || isNaN(letterBox2)) {
    alert('Nique ta mère');
}
if(letterBox1 < letterBox2) {
    console.log(letterBox2);
} else if (letterBox1 > letterBox2){
    console.log(letterBox1);
} else {
    console.log("Les deux nombres sont identiques");
}

/*
version avec parseInt
let comp1 = parseInt(prompt('Saisissez un premier nombre'));
let comp2 = parseInt(prompt('Saisissez un deuxième nombre'));
if (comp1 > comp2) {
    console.log(comp1 + " est plus grand que " + comp2);
} else if (comp1 < comp2) {
    console.log(comp1 + " est plus petit que " + comp2);
} else {
    console.log(comp1 + " les deux nombres sont égaux");
}
*/

// Exo objets

let DoctorWho = {
    nom: "Doctor Who",
    description: "extraterrestre"
};

let DocteurHouse = {
    nom: "Docteur House",
    description: "misanthrope"
};

let DocteurQuinn = {
    nom: "Docteur Quinn",
    description: "femme médecin"
};

let Docteurs = [DoctorWho, DocteurHouse, DocteurQuinn];

console.log(Docteurs);
console.log(Docteurs[1]);
console.log(Docteurs[2].description);

/*Une version ou tout est fait en un coup mais pas de nom d'objets.
const Docteurs = [
    {
        nom: "Doctor Who",
        description: "extraterrestre"
    },
    {
        nom: "Docteur House",
        description: "misanthrope"
    },
    {
        nom: "Docteur Quinn",
        description: "femme médecin"
    }
];
console.log(Docteurs);
console.log(Docteurs[1]);
console.log(Docteurs[1].description);
*/