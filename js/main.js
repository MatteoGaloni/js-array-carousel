// const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
// console.log(images);

let sliderElement = document.getElementById("slider")
console.log(sliderElement);
let image = document.createElement("img");
image.src = ["./img/01.webp", "./img/02.webp"];

image.className = "slide";
sliderElement.append(image);
