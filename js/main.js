const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
// console.log(images);

for (let c = 0; c < images.length; c++) {
    const sorgenteImg = images[c];
    // console.log(sorgenteImg)
    
    let sliderElement = document.getElementById("slider")
    // console.log(sliderElement);
    let image = document.createElement("img");
    image.src = sorgenteImg;
    console.log(sorgenteImg);
    sliderElement.append(image);

    if (c == 0) {
        image.className = "slide"
    } else {
        image.className = "dNone";
       
    }

    
}
 

    



