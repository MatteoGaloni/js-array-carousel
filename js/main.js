const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
// console.log(images);
let currentImage = 0
// console.log(currentImage)


for (let c = 0; c < images.length; c++) {
    const sorgenteImg = images[c];
    // console.log(sorgenteImg)
    
    let sliderElement = document.getElementById("slider")
    // console.log(sliderElement);
    image = document.createElement("img");
    image.src = sorgenteImg;
    // console.log(sorgenteImg);
    sliderElement.append(image);

    if (c == 0) {
        image.classList = "dBlock"
    }
    // else {
    //     image.classList = "dNone";
       
    // }
}

const slideImages = document.querySelectorAll("#slider > img")
console.log(slideImages)

const btnNext = document.getElementById("btnNext")
btnNext.addEventListener("click", function () {
    // console.log(btnNext)

    
})


 

    



