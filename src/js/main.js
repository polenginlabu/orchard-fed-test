
import '../scss/style.scss' 
import '../fonts/OpenSans/OpenSans-Bold.ttf'
import '../fonts/OpenSans/OpenSans-BoldItalic.ttf'
import '../fonts/OpenSans/OpenSans-ExtraBold.ttf'
import '../fonts/OpenSans/OpenSans-ExtraBoldItalic.ttf'
import '../fonts/OpenSans/OpenSans-Italic.ttf'
import '../fonts/OpenSans/OpenSans-Light.ttf'
import '../fonts/OpenSans/OpenSans-LightItalic.ttf'
import '../fonts/OpenSans/OpenSans-Medium.ttf'
import '../fonts/OpenSans/OpenSans-MediumItalic.ttf'
import '../fonts/OpenSans/OpenSans-Regular.ttf'
import '../fonts/OpenSans/OpenSans-SemiBold.ttf'
import '../fonts/OpenSans/OpenSans-SemiBoldItalic.ttf'

var figures = document.querySelectorAll(".figure");
var readMore = document.querySelectorAll(".read-more");
var closeBox = document.getElementById("closeBox");
var targetImage = document.getElementById("target-image");

closeBox.addEventListener("click", function() {
    closeLightbox()
});

figures.forEach(function(figure) {
    figure.addEventListener("click", function() {
        var src = figure.getAttribute("data-src");
        openLightbox(src);
    });
});

readMore.forEach(function(read) {
    read.addEventListener("click", function(){
        var title = read.parentNode.querySelector(".title");
        console.log("Read more: "+ title.textContent);
    })
});

function openLightbox(src) {
    targetImage.setAttribute("src", src);
    document.getElementById('Lightbox').style.display = 'block';
};

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};