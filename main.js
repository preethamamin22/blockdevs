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

    // 3. Login Modal Logic
    const loginModal = document.getElementById('login-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeModal = document.getElementById('close-modal');
    const loginForm = document.getElementById('login-form');

    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });

        if (closeModal) {
            closeModal.addEventListener('click', () => {
                loginModal.style.display = 'none';
            });
        }

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });

        // 4. Authentication Simulation
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const user = document.getElementById('username').value.toLowerCase();
                const pass = document.getElementById('password').value;

                if (user === 'admin' && pass === 'admin') {
                    // Redirect to Admin Panel
                    window.location.href = 'admin.html';
                } else if (user && pass) {
                    // Simple redirect for any other credentials
                    window.location.href = 'dashboard.html';
                } else {
                    alert('Please enter both username and password.');
                }
            });
        }
    }

    // Course Card Click -> Player
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = 'player.html';
        });
    });

    // 5. FAQ Accordion Logic
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('active');

            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // 6. Admin Logic (Initial Setup)
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
