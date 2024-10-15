import "@hotwired/turbo-rails"
import "controllers"

// JavaScript code to implement the slideshow feature that changes the banner every 5 seconds
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.jumbotron .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
    showSlide(currentSlide);
});

// JavaScript code to implement the horizontal scrolling containers with left and right scrolling buttons
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.horizontal-scrolling-container .scrolling-content');
    const scrollItems = document.querySelectorAll('.horizontal-scrolling-container .scroll-item');
    const leftButton = document.querySelector('.horizontal-scrolling-container .scroll-button.left');
    const rightButton = document.querySelector('.horizontal-scrolling-container .scroll-button.right');
    let currentIndex = 0;

    function updateScroll() {
        scrollContainer.style.transform = `translateX(-${currentIndex * (scrollItems[0].offsetWidth + 20)}px)`;
        scrollItems.forEach((item, index) => {
            item.classList.toggle('center', index === currentIndex);
        });
    }

    leftButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateScroll();
        }
    });

    rightButton.addEventListener('click', function() {
        if (currentIndex < scrollItems.length - 1) {
            currentIndex++;
            updateScroll();
        }
    });

    updateScroll();
});
