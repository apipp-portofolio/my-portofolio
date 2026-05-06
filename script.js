document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    // Memastikan semua icon seperti 'video', 'camera', 'cpu' muncul
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Scroll Reveal Animation
    // Mendeteksi elemen section saat masuk ke layar (viewport)
    const observerOptions = {
        threshold: 0.15 // Section muncul setelah 15% bagiannya terlihat
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Menerapkan observer ke semua tag <section>
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 3. Smooth Navigation Scroll
    // Mencegah loncatan kasar saat mengklik menu navigasi
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Offset untuk ruang navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Auto-Play Video Fix for Mobile
    // Terkadang browser mobile mematikan autoplay, ini memaksanya untuk jalan
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.play().catch(() => {
            // Jika autoplay gagal, biarkan user klik untuk main (opsional)
            console.log("Autoplay blocked by browser");
        });
    });
});
