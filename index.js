let imageSlider = document.getElementById("image-slider");
let leftArrow = document.getElementById("left-arrow-btn");
let rightArrow = document.getElementById("right-arrow-btn");

var imagePaths = ["bgg1.jpg", "bgg2.jpg", "bgg3.jpg","bgg4.jpg", "bgg5.jpg"]

let path = 1
rightArrow.onclick = function() {
    if(path <= imagePaths.length-1) {
        path++
        imageSlider.style.backgroundImage = `url("./Resources/bgg${path}.jpg")`;
    }else {
        path = 1
        imageSlider.style.backgroundImage = `url("./Resources/bgg${path}.jpg")`;
    }
}
leftArrow.onclick = function() {
    if(path >= 2) {
        path--
        imageSlider.style.backgroundImage = `url("./Resources/bgg${path}.jpg")`;
    }else {
        path = imagePaths.length
        imageSlider.style.backgroundImage = `url("./Resources/bgg${path}.jpg")`;
    }
}