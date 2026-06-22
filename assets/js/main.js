document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Story Modal Logic
    const storyModal = document.getElementById('storyModal');
    const openStoryBtn = document.getElementById('openStoryBtn');
    const closeStoryBtn = document.getElementById('closeStoryBtn');
    const closeStoryBackdrop = document.getElementById('closeStoryBackdrop');

    if (openStoryBtn && storyModal) {
        openStoryBtn.addEventListener('click', () => {
            storyModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        const closeModal = () => {
            storyModal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Enable background scrolling
        };

        closeStoryBtn.addEventListener('click', closeModal);
        closeStoryBackdrop.addEventListener('click', closeModal);
    }

    // Typewriter effect
    const textElement = document.querySelector('.typewriter-text');
    if (textElement) {
        const textToType = "Fredo Walla";
        let i = 0;
        
        function typeWriter() {
            if (i < textToType.length) {
                textElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 150); // typing speed
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Simple fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial styles for animation
    const animateElements = document.querySelectorAll('.skill-item');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Quote Slider Logic
    const slides = document.querySelectorAll('.quote-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (slides.length > 0) {
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            if (index >= slides.length) currentSlide = 0;
            if (index < 0) currentSlide = slides.length - 1;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide--;
                showSlide(currentSlide);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide++;
                showSlide(currentSlide);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    }
});
