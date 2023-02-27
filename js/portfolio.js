// FUNCTIONS TO OPEN + CLOSE CONTACT FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// FUNCTION THAT DISPLAYS FIRST IMAGE IN SLIDESHOW WHEN PAGE LOADS
var slideIndex = 1;
showSlides(slideIndex);

// FUNCTION CHANGES SLIDE WHEN LEFT/RIGHT ARROWS ARE CLICKED
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// FUNCTION CHANGES SLIDE WHEN DOTS ARE CLICKED
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // TAKES CLASS ELEMENTS "mySlides" AND STORES THEM IN THE VARIABLE ARRAY "slides"
    var dots = document.getElementsByClassName("dot"); // TAKES CLASS ELEMENTS "dot" + STORES THEM IN VARIABLE ARRAY "dots"
    if (n > slides.length) {slideIndex = 1}; // IF N (NUMBER PASSED INTO FUNCTION) IS GREATER THAN THE LENGTH OF "slides" ARRAY, slideINDEX IS SET TO 1
    if (n < 1) {slideIndex = slides.length}; // IF N (NUMBER PASSED INTO THE FUNCTION) IS LESS THAN 1, slideIndex IS SET TO THE LENGTH OF THE ARRAY "slides" 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // FOR LOOP THAT TAKES EACH ITEM IN "slides" ARRAY + SETS DISPLAY TO NONE 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // FOR LOOP THAT TAKES EACH ITEM IN "dots" ARRAY + REMOVES "active" WHICH REMOVES ACTIVE STYLING
    }
    slides[slideIndex - 1].style.display = "block"; // DISPLAYS IMAGE IN SLIDESHOW
    dots[slideIndex - 1].className += " active"; // ADDS ACTIVE STYLING TO DOT ASSOCIATED WITH IMAGE 
}

// CODE BELOW WILL CREATE CLOSE THE CONTACT FORM WHEN THE USER CLICKS OFF OF IT
// STEP 1) Add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    // IF CLICK HAPPENS ON CANCEL BUTTON OR ANYWHERE NOT ON THE CONTACT FORM AND THE CLICK DOESN'T HAPPEN ON ANY ELEMENT IN THE CONTACT CLASS, THEN CALL closeForm() FUNCTION
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false)

//const myText = new SplitType('#my-name')
//    gsap.to('.char', {
//        y: 0,
//        stagger: 0.05,
//        delay: 0.2,
//        duration: .1
//    })