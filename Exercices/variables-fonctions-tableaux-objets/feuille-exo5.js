//-----------------Test sur l'évènement "scroll".

const bar = document.querySelector(".bar");

//On regarde si notre évènement "scroll" fonctionne.

// addEventListener("scroll", function () {
//     console.log(`
//         Hauteur page : ${document.body.scrollHeight}
//         Hauteur affichage : ${innerHeight}
//         Scroll Position : ${pageYOffset}`);
// })

console.log(bar);

addEventListener("scroll", function() {
    const scrollMax = document.body.scrollHeight - innerHeight;
    const onEstOu = pageYOffset/scrollMax*100;
    bar.style.width = onEstOu+ "%";
});

console.log(window);

//-----------------Test évènement "load"

const images = document.querySelectorAll("img");

const tabImg = Array.from(images);

tabImg.map((image, i) => image.addEventListener("load", function(){
    console.log(`ìmg Num : ${i} - OK`);
}))


//-----------------Test setTimeout

const titre = document.querySelector("h1");

const txt = setTimeout(function() {
    titre.textContent = "SALUT C'EST COOL";
    titre.style.opacity = 1;
    document.body.style.background = "royalblue";
}, 10000);



