document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Reveal on Scroll Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Target sections and timeline items
    document.querySelectorAll('section, .timeline-item').forEach(el => observer.observe(el));

    // Smooth Scroll Navigation Fix
    document.querySelectorAll('.nav-link, a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        });
    });
});
