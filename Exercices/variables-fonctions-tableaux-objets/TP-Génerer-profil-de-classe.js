const james = {
    Prénom : "James",
    Nom : "Royer",
    Description : "Roliste, mais a un rôle caché...",
    photo : "images/Dev31-26-02-10.jpg"
}

const cyril = {
    Prénom : "Cyril",
    Nom : "Franc",
    Description : "Un tout p'tit Breton",
    photo : "images/Dev31-26-02-7.jpg"
}
const mathieu = {
    Prénom : "Mathieu",
    Nom : "Papaix",
    Description : "Gourou de la guilde",
    photo : "images/portrait-femme-agee-fantaisie-tant-que-sirene_23-2151456498.avif"
}
const yanis = {
    Prénom : "Yanis",
    Nom : "Jumeau",
    Description : "Aime bien simuler, sur circuit...",
    photo : "images/Cyberpunk-Edgerunners.jpg"
}
const olivier = {
    Prénom : "Olivier",
    Nom : "Seillan",
    Description : "Les jeux sont faits",
    photo : "images/Capture d'écran 2026-08-27 140514.png"
}
const alexis = {
    Prénom : "Alexis",
    Nom : "Jordan",
    Description : "Mon frère c'est pas Pierre",
    photo : "images/image.png"
}
const mohammed = {
    Prénom : "Mohammed",
    Nom : "Tahir",
    Description : "Pas sur la même fréquence",
    photo : "images/Dev31-26-02-8.jpg"
}
const erwann = {
    Prénom : "Erwann",
    Nom : "Séguier",
    Description : "Rage quitter",
    photo : "https://m.media-amazon.com/images/I/61fxeKFo7xL._AC_UF1000,1000_QL80_.jpg"
}
const kyo = {
    Prénom : "Kyo",
    Nom : "Casajuana",
    Description : "Génie incompris",
    photo : "https://aluna-festival.fr/wp-content/uploads/2025/01/kyo-en-concert-festival-aluna-2025-scene-etoile.jpg"
}

const container = document.getElementById("container");

const tabData = [james, cyril, mathieu, yanis, olivier, alexis, mohammed, erwann, kyo];

function create(Name) {
    const card = document.createElement("div");
    card.innerHTML = `
        <img src="${Name.photo}" width="250" alt="Photo de ${Name.Nom}">
        <article class="details"><h3>${Name.Nom}</h3>
        <h4>${Name.Prénom}</h4>
        <p><strong>Description :</strong><br> ${Name.Description}</p></article>
        `;
        container.appendChild(card);
        // localStorage.setItem("Nom", Name.Nom);
        // localStorage.setItem("Prénom", Name.Prénom);
        // localStorage.setItem("Description", Name.Description);
}

create(james);
create(cyril);
create(mathieu);
create(yanis);
create(olivier);
create(alexis);
create(mohammed);
create(erwann);
create(kyo);

function addToLocalStorage(nom) {
    localStorage.setItem(`${nom.Prénom}`, Object.values(nom));
}

// let James = Object.entries(james);
// let Cyril = Object.entries(cyril);
// let Mathieu = Object.entries(mathieu);
// let Yanis = Object.entries(yanis);
// let Olivier = Object.entries(olivier);
// let Alexis = Object.entries(alexis);
// let Mohammed = Object.entries(mohammed);
// let Erwann = Object.entries(erwann);
// let Kyo = Object.entries(kyo);

addToLocalStorage(james);
addToLocalStorage(cyril);
addToLocalStorage(mathieu);
addToLocalStorage(yanis);
addToLocalStorage(olivier);
addToLocalStorage(alexis);
addToLocalStorage(mohammed);
addToLocalStorage(erwann);
addToLocalStorage(kyo);

const button = document.querySelector("button");

// const absents = container.querySelectorAll("div");

button.addEventListener("click", function() {
    localStorage.removeItem("Erwann");
    localStorage.removeItem("Kyo");
    // container.removeChild(absents);
})







