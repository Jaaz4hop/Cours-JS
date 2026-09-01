// Exo 1 Classe :
// Créez une classe nommée "Utilisateur" qui prend un pseudo et un role dans son constructeur, puis ajoutez à l'intérieur une méthode "saluer" qui permet d'afficher un message utilisant le pseudo et le role de l'utilisateur. Pour valider le bon fonctionnement, créez un nouvel utilisateur de votre choix à partir de ce modèle et appelez sa méthode pour vérifier le résultat.
class User {
    constructor(pseudo, role) {
        this.pseudo = pseudo;
        this.role = role;
    }
    saluer() {
        console.log(`Bonjour ${this.pseudo}, ${this.role}.`);
    }
}

let mathieu = new User("Mathieu", "étudiant à l'Adrar");
let james = new User("James", "roliste");
let yanis = new User("Yanis", "pilote sur circuit");
let mohammed = new User("Mohammed", "chercheur de fréquence");

mathieu.saluer();
james.saluer();
yanis.saluer();
mohammed.saluer();

// Exo 2 classe réduction prix
// Créez une classe nommée "Smartphone" qui prend une marque et un prix dans son constructeur, puis ajoutez à l'intérieur une méthode "appliquerRemise" qui diminue le prix de 50. Pour valider le bon fonctionnement, créez un nouveau téléphone à partir de ce modèle, appliquez-lui la remise, puis affichez son nouveau prix pour vérifier que la modification a bien été prise en compte.

class Smartphone {
    constructor(marque, prix) {
        this.marque = marque;
        this.prix = prix;
    }
    appliquerRemise() {
        this.prix -= 50;
    }
}

let samsung = new Smartphone("Samsung", "539");
let apple = new Smartphone("Apple", "1200");

apple.appliquerRemise();
console.log(apple.prix);


// "Exercice JS: Le Catalogue de Livres"
// Créer un modèle de livre, sauvegarder les titres dans le navigateur et les afficher sur la page web.

// Le modèle : Créez une classe "Livre" pour structurer vos données (titre, auteur, année, type et genres).
// La création : Créez 3 livres différents à partir de ce modèle.
// Le stockage : Débrouillez-vous pour enregistrer le titre de chaque livre dans le "localStorage".
// L'affichage : Récupérez ces titres depuis le stockage pour les injecter dynamiquement sous forme de liste "<li>" dans votre code HTML.

class Livre {
    constructor(titre, auteur, année, type, genre){
        this.titre = titre;
        this.auteur = auteur;
        this.année = année;
        this.type = type;
        this.genre = genre;
    }
}

let laBible = new Livre("La Bible", "inconnu", "8e siècle av JC", "litérature religieuse", "long");
let tchoupi = new Livre("T'choupi", "Thierry Courtain", "1992", "litérature jeunesse", "court");
let petitPrince = new Livre("Le petit prince", "Antoine de Saint-Exupery", "1943", "litérature jeunesse", "court");

let tabData = [laBible.titre, tchoupi.titre, petitPrince.titre];

localStorage.setItem("titresLivres", JSON.stringify(tabData));

let titres = JSON.parse(localStorage.getItem("titresLivres"));

let liste = document.querySelector("ul");
console.log(liste);

for(let i =0 ; i<tabData.length ; i++) {
    let ajoutListe = document.createElement("li");
    ajoutListe.textContent = titres[i];
    liste.appendChild(ajoutListe);
}
