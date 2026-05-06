document.addEventListener('DOMContentLoaded', () => {
    // Render Ikon
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Logic Animasi Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Mencegah lag, animasi diputar sekali saja
            }
        });
    }, observerOptions);

    // Memantau semua elemen yang punya class reveal & timeline-item
    document.querySelectorAll('.reveal, .timeline-item').forEach(el => {
        observer.observe(el);
    });

    // Navigasi Smooth Scroll
    document.querySelectorAll('.nav-link, a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
