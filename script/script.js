"use strict";
console.clear();

const button = document.querySelector("button");
console.dir(button);
const img = document.querySelector("img");
console.dir(img);


button.addEventListener("click", function () {

    img.src = "./img/yellow_lamp.png";
    button.innerHTML = "Spegni";
}

)

console.log(button.innerHTML);



