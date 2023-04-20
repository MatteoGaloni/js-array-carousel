// *****ADD VARIABLES*****
// ***********************
const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
// console.log(images);
let currentImage = 0
// console.log(currentImage)


// *****START CYCLE TO CREATE IMG ELEMENTS*****
// ***********************
for (let c = 0; c < images.length; c++) {
    const sorgenteImg = images[c];
    // console.log(sorgenteImg)
    
    let sliderElement = document.getElementById("slider")
    // console.log(sliderElement);
    image = document.createElement("img");
    image.src = sorgenteImg;
    // console.log(sorgenteImg);
    sliderElement.append(image);
    
// *****CREATE CONDITION IN ORDER TO PROVIDE DBLOCK CLASS*****
// ***********************

    if (c == 0) {
        image.classList = "dBlock"
    }   
}

// *****CREATE IMG VARIABLE*****
// ***********************
const slideImages = document.querySelectorAll("#slider > img")
// console.log(slideImages)

// *****ADD EVENTLISTENER ON CLICK (1ST TRICKY SOLUTION)*****
// ***********************
// const btnNext = document.getElementById("btnNext")
// btnNext.addEventListener("click", function () {

//     if (currentImage == 4) {
//         slideImages[4].classList.remove("dBlock")
//         currentImage = -1
//     }

//     const ImgElement = slideImages[currentImage+1]
//     console.log(ImgElement)
//     ImgElement.classList.add("dBlock")
//     const ImgElement1 = slideImages[currentImage]
//     if (currentImage > -1) {
//         ImgElement1.classList.remove("dBlock")
//     }
    
//     currentImage ++
//     console.log(currentImage)
    
// })

// *****ADD EVENTLISTENER(2nd SOLUTION)*****
// ***********************

const btnNext = document.getElementById("btnNext")
btnNext.addEventListener("click", function () {

    slideImages[currentImage].classList.remove("dBlock")
    currentImage++
    if (currentImage == slideImages.length) {
        currentImage = 0
        console.log(currentImage)        
    }
    slideImages[currentImage].classList.add("dBlock")  
})

const btnPrevious = document.getElementById("btnPrevious")
btnPrevious.addEventListener("click", function () {

    slideImages[currentImage].classList.remove("dBlock")
       
    if (currentImage == 0) {
        currentImage = slideImages.length              
    }      
    currentImage--
    slideImages[currentImage].classList.add("dBlock")

})





 

    



