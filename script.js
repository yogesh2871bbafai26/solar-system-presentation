let currentSlide = 1;
const totalSlides = 12;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    if (n > totalSlides) {
        currentSlide = totalSlides;
    } else if (n < 1) {
        currentSlide = 1;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    document.getElementById(`slide-${currentSlide}`).classList.add('active');
    document.getElementById('slide-counter').textContent = `${currentSlide} / ${totalSlides}`;
    
    document.getElementById('prev-btn').disabled = currentSlide === 1;
    document.getElementById('next-btn').disabled = currentSlide === totalSlides;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') previousSlide();
});

// Initialize
showSlide(currentSlide);