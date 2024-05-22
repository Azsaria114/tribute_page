document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000); // Change image every 3 seconds

    // Initialize the first slide
    showSlide(slideIndex);
});
