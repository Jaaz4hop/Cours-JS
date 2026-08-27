// const liste = document.getElementById("maListe");


// function newList (word) {
//     const newLi = document.createElement("li");
//     newLi.innerHTML = `${word}`;
//     liste.appendChild(newLi);
// }

// newList("Pomme");
// newList("Banane");
// newList("Orange");

// const element = document.querySelectorAll("li");
// liste.insertBefore(element[2], element[0]);




function newTxt(w) {
    const createTxt = document.createElement("p");
    createTxt.innerHTML = `${w}`;
    document.body.appendChild(createTxt);
}

newTxt("Mais tu es fou ou quoi");

const txt = document.getElementsByTagName("p");

const texteTab = Array.from(txt);
texteTab.map(txt => txt.innerHTML = "LOL HACKED");