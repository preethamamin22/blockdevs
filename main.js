// Block Devs - Core Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.course-card, .hero-main, .hero-visual, .testimonial-card, .faq-item').forEach(el => {
        el.classList.add('hide');
        revealObserver.observe(el);
    });

    // 2. Navigation Logic
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Login/Dashboard Redirect
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    // Course Card Click -> Player
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = 'player.html';
        });
    });

    // 3. FAQ Accordion Logic
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            // Toggle active class
            item.classList.toggle('active');

            // Optional: Close others
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // 4. Admin Logic (Simulation)
    initAdminData();

    console.log('Block Devs Engine: Online');
});

/**
 * Simulates a backend by initializing data in localStorage
 */
function initAdminData() {
    if (!localStorage.getItem('bd_courses')) {
        const initialCourses = [
            { id: 1, title: 'Ethereum Programming', subtitle: 'The Solidity Mastery Course', progress: 65, tag: 'Ethereum' },
            { id: 2, title: 'Solana Development', subtitle: 'Rust & Anchor Framework', progress: 20, tag: 'Solana' },
            { id: 3, title: 'Web3 Integration', subtitle: 'Metamask & Ethers.js', progress: 0, tag: 'Web3' }
        ];
        localStorage.setItem('bd_courses', JSON.stringify(initialCourses));
    }
}
