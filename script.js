document.addEventListener('DOMContentLoaded', function() {
    // Page top button
    const topBtn = document.querySelector('.top-btn');
    
    if (topBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                topBtn.classList.add('visible');
            } else {
                topBtn.classList.remove('visible');
            }
        });

        topBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Mobile menu toggle
    const spMenu = document.querySelector('.sp-menu');
    const menuSpList = document.querySelector('.menu-sp-list');
    
    if (spMenu && menuSpList) {
        spMenu.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            menuSpList.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const menuLinks = menuSpList.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                spMenu.classList.remove('active');
                menuSpList.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === 'javascript:void(0)') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations
    const fadeElements = document.querySelectorAll('.fadein');
    
    const checkFadeIn = () => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.85) {
                element.classList.add('scrollin');
            }
        });
    };

    // Initial check
    checkFadeIn();

    // Check on scroll
    window.addEventListener('scroll', checkFadeIn);
});
