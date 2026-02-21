console.log("Blackrock Architecture website loaded.");

document.addEventListener('DOMContentLoaded', () => {
    // Current Setup
    const slideIndicator = document.querySelector('.current-slide');
    const nextBtn = document.querySelector('.next-slide-btn');
    const heroTitle = document.querySelector('.hero-title');
    
    let currentSlide = 1;
    const totalSlides = 3;

    // Entrance Animation
    if(heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }

    // Slider Logic
    if (nextBtn && slideIndicator) {
        nextBtn.addEventListener('click', () => {
            currentSlide++;
            if (currentSlide > totalSlides) {
                currentSlide = 1;
            }
            
            // Animate Number Change
            slideIndicator.style.opacity = '0';
            slideIndicator.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                slideIndicator.textContent = `0${currentSlide}`;
                slideIndicator.style.opacity = '1';
                slideIndicator.style.transform = 'translateY(0)';
            }, 300);
        });
    }

    // Optional: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
