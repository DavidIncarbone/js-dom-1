"use strict";
console.clear();

const buttonImg = document.querySelector("button");
console.dir(buttonImg);
const lamp = document.querySelector("img");
console.dir(lamp);


buttonImg.addEventListener("click", function () {

    if (lamp.src.includes("img/white_lamp.png")) {
        lamp.src = "img/yellow_lamp.png";
        lamp.alt = "yellow_lamp";
        buttonImg.innerHTML = "Spegni";


    } else {
        lamp.src = "img/white_lamp.png";
        lamp.alt = "white_lamp";
        buttonImg.innerHTML = "Accendi";


    }
}

)

console.log(buttonImg.innerHTML);



