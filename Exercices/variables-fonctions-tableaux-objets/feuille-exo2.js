/*Exercice : Calculer une moyenne + For
Créer une fonction moyenne qui prend en paramètre un array de plusieurs notes et retourne la moyenne calculée.
Dans cette fonction, on crée une boucle pour faciliter le calcul de la moyenne.
Afficher en console un appel à la fonction moyenne en lui passant un tableau de plusieurs notes.*/

function moyenne(tab) {
    let sum = 0;
    for(let i=0; i<tab.length ; i++){
        sum += tab[i];
    }
    let moy = sum/tab.length;
    return moy;
}

let notes = [12,15,7,20,12,14,13,10,19,6,14,18,17,12]

console.log(moyenne(notes));