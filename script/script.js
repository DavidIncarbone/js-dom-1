"use strict";
console.clear();

const button = document.querySelector("button");
console.dir(button);
const img = document.querySelector("img");
console.dir(img);


button.addEventListener("click", function () {

    button.innerHTML = "Spegni";
    img.src = "./img/yellow_lamp.png";
    img.alt = "yellow-lamp";

}

)

console.log(button.innerHTML);



