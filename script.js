console.log("Blackrock Architecture website loaded.");

document.addEventListener('DOMContentLoaded', () => {
    // Current Setup
    const slideIndicator = document.querySelector('.current-slide');
    const nextBtn = document.querySelector('.next-slide-btn');
    const heroTitle = document.querySelector('.hero-title');

    let currentSlide = 1;
    const totalSlides = 3;

    // Entrance Animation
    if (heroTitle) {
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
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the true bottom
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once it's visible so it doesn't fade out and in again
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab all elements marked for animation
    const animatedElements = document.querySelectorAll('.fade-up-element, .drop-down-element, .fade-in-element');
    animatedElements.forEach(el => scrollObserver.observe(el));
    // JS-Driven carousel logic removed in favor of 100% smooth CSS orbit animations

    // Lamp Hover Interaction
    const srCards = document.querySelectorAll('.sr-card');
    srCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const lampId = card.getAttribute('data-lamp');
            const lamp = document.getElementById(lampId);
            if (lamp) lamp.classList.add('is-active');
        });
        card.addEventListener('mouseleave', () => {
            const lampId = card.getAttribute('data-lamp');
            const lamp = document.getElementById(lampId);
            if (lamp) lamp.classList.remove('is-active');
        });
    });
});
