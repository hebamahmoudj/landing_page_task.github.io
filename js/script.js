// start navbar coding
window.onscroll = function() { scrollFunction() };
var links = Array.from(document.getElementsByClassName('navbar-link'));

function scrollFunction() {
    if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
        document.getElementById("navbar").style.backgroundColor = "black";


    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent ";
        document.getElementById("navbar").style.opacity = ".4"

    }
}

const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);
// end navbar coding



// start slidercode
var num = 0;
//Replace with: relative pathes to your images, alt text, caption
imgArray = [
    ['images/slider-1.jpg', 'slide1', 'read.html'],
    ['images/slider-2.jpg', 'slide2', 'read1.html'],
    ['images/slider-3.jpg', 'slide3', 'read2.html'],
    // ['images/slide4.jpg', 'dog4', 'I love to play and sleep']
]

//Replace with your IDs of image and caption
function slideshow(slide_num) {

    // for (let i = 0; i < imgArray.length; i++) {
    //     if (i == 2) {
    //         i == 0;
    //     }

    document.getElementById('slide').src = imgArray[slide_num][0];
    document.getElementById('slide').alt = imgArray[slide_num][1];
    // document.getElementById('caption').innerHTML = imgArray[slide_num][2];
    document.getElementById('callbt').href = imgArray[slide_num][2];
    document.getElementById('callbt2').href = imgArray[slide_num][2];

    // document.getElementById("callbtn2").setAttribute("href", imgArray[slide_num][3]);

}

// end slider code