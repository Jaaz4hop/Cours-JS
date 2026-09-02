let affichage = document.getElementById("container");




//Fonction avec un paramètre qui permet d'indéxer l'url de l'API que l'on souhaite fetch. async est inportant pour le bon fonctionnement du script.
async function chargerDonnees(n) {
    for(let i = 1; i<=n ; i++) {

        //On récupère via l'API Pokemon les données dont on a besoin

        const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const donnees = await reponse.json();

        //Console.log(donnees); ---- Permet de vérifier ce que nous renvois les API

        //Création des élèments que l'on va injecter dans le HTML

        let newContainer = document.createElement("div");
        let newTxt = document.createElement("h3");
        let newImg = document.createElement("img");

        //Application des attributs sur les élèments créer

        newTxt.textContent = donnees.name.charAt(0).toUpperCase() + donnees.name.slice(1);

        //Ici on viens spécifiquement chercher les données dont on a besoin, que l'on a trouvé grâce au premier console.log sur les données.

        newImg.src = donnees.sprites.front_shiny;
        newImg.alt = donnees.name;

        //Injection dans le HTML des élèments créés

        affichage.appendChild(newContainer);
        newContainer.appendChild(newTxt);
        newContainer.appendChild(newImg);
    }
}


chargerDonnees(1025);

