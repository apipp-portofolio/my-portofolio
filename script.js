document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Intersection Observer (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Memberikan delay sedikit antar elemen (stagger)
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Targetkan semua section dan item timeline
    const itemsToReveal = document.querySelectorAll('section, .timeline-item, .reveal');
    itemsToReveal.forEach(el => revealObserver.observe(el));

    // 3. Smooth Navigation Scroll
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Parallax Effect for Glow Spot (Optional)
    window.addEventListener('mousemove', (e) => {
        const glow = document.querySelector('.glow-spot');
        if (glow) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            glow.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        }
    });
});
