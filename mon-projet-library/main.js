//Test pour Dompurify

import { nettoyer } from "./sanitizer.js";

const input = document.querySelector("#message");
const resultat = document.querySelector("#resultat");

console.log(input.value);

input.addEventListener("input", () => {
    const propre = nettoyer(input.value);
    resultat.innerHTML = propre;
})


// Test pour party.js
const bouton = document.querySelector("button");

bouton.addEventListener("click", () => {
    party.confetti(bouton);
});