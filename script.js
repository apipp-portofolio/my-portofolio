document.addEventListener('DOMContentLoaded', () => {
    // Render Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Intersection Observer untuk animasi muncul
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Terapkan pada semua section dan item timeline
    document.querySelectorAll('section, .timeline-item').forEach((el) => {
        observer.observe(el);
    });

    // Smooth Scroll Navigation
    document.querySelectorAll('.nav-link, a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});
