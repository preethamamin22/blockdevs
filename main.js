// Basic animations and interactions for Block Devs
document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.course-card, .hero-main, .hero-visual').forEach(el => {
        el.classList.add('hide');
        observer.observe(el);

        // Add click listener for navigation
        if (el.classList.contains('course-card')) {
            el.addEventListener('click', () => {
                window.location.href = 'player.html';
            });
        }
    });

    // Login button effect
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    // Question cards navigation
    document.querySelectorAll('.question-card').forEach(card => {
        card.addEventListener('click', () => {
            // In a real app this might go to question-detail.html
            alert('Opening question discussion...');
        });
    });

    // Dynamic sticky navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    console.log('Block Devs site initialized.');
});
