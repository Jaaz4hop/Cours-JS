//-----Exercice 2: Contacter une API
//Créez deux fichiers locaux: index.html et main.js.
//Connectez-vous à l'API vie la EndPoint fourni : https://jsonplaceholder.typicode.com/todos?_limit=5
//Récupérez et affichez le titre des 5 premieres tâches dans une liste Web.

//--Bout de code que créer pour l'exercice

//On récupère la liste créer dans le HTML
const liste = document.getElementById("liste");

//On créer la fonction qui va permettre de récupérer les données de l'API et aussi afficher dans l'<ul> du HTML nos élèments de la liste.

//Fonction avec async devant pour contacter les API
async function chargerDonnees() {
    //On utilise l'instruction Try and Catch pour que si le bout de code que l'on met dans Try ne fonctionne pas, on est un retour dans la console avec le Catch.
    try {
        //On utilise await pour récupérer les données de l'API et les retourner.
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`);
        const donnees = await reponse.json();

        //On regarde dans la console si on récupère bien les données et on regarde ce que l'on eut exploiter, ici title.
        console.log(donnees);

        //On créer une boucle pour créer pour chaques title de la liste un élèment que l'on va insérer dans la liste sur le HTML.
        for(let i=0 ; i<donnees.length ; i++){
            let newLi = document.createElement("li");
            newLi.textContent = donnees[i].title;
            liste.appendChild(newLi);
        }
    } catch (erreur) {
        console.log("Une erreur est survenue " + erreur.message);
    }
}

//On appelle la fonction et gg.
chargerDonnees();


//--Je voulais séparer en deux fonctions ce que j'ai fait en une plus haut car je voudrais dans l'idéal qu'une fonction serve à faire une action et pas 50. Le souci venait de la const donnée déclarer dans la fonction chargerDonnées() qui du coup n'était pas accessible ailleurs. La solution serait de retourner le resultat dans la fonction chargerDonnées() et ensuite utiliser ce resultat dans d'autres fonctions, comme ceci:

//On vient chercher les donnees de l'API:
// async function chargerDonnees() {
//     try {
//         const reponse = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`);
//         return await reponse.json();
//     } catch (erreur) {
//         console.log("Une erreur est survenue " + erreur.message);
//     }
// }

//On créer la fonction pour ajouter les données a des listes du HTML.
// function afficherDansDOM(donnees) {
//     for (let i = 0; i < donnees.length; i++) {
//         let newLi = document.createElement("li");
//         newLi.textContent = donnees[i].title;
//         liste.appendChild(newLi);
//     }
// }

//On utilise une derniere fonction pour appeler les autres fonctions - important de garder le async au début de la fonction pour pouvoir utiliser le await car on apelle l'aPI et on veut que notre script fonctionne.

// async function initialiser(){
//     const donnees = await chargerDonnees();
//     if(donnees) {
//         afficherDansDOM(donnees);
//     }
// }

// initialiser();

