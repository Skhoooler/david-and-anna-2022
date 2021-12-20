// From https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp

var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Control
function changeSlides(increment) {
    showSlides(slideIndex += increment);
}

// Thumbnail Image Controls
function selectSlide(selection) {
    showSlides(slideIndex = selection);
}

// Handles displaying the right slide
function showSlides(index) {
    var i;

    var slides = document.getElementsByClassName("slide");
    var thumbnails = document.getElementsByClassName("thumbnail");
    var captionText = document.getElementById("caption");
    
    // Sanity checsk to make sure the index isn't greater or less
    // than the amount of images available
    if (index > slides.length) { slideIndex = 1;};
    if (index < 1)             { slideIndex = slides.length};

    // Stop all of the images from displaying by default
    for ( i = 0; i < slides.length; i++ ){
        slides[i].style.display = "none";
    }

    // Gets rid of the "active" class for each of the thumbnails
    for ( i = 0; i < thumbnails.length; i++ ) {
        thumbnails[i].className = thumbnails[i].classList.replace(" active", "")
    }

    slides[slideIndex - 1].style.display = "inline-block";
    thumbnails[slideIndex - 1].className += "active";
    captionText.innerHTML = dots[slideIndex - 1].alt;

}