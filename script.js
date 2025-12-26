document.addEventListener('DOMContentLoaded', function() {
    // Page top button functionality
    const topBtn = document.querySelector('.top-btn');
    
    if (topBtn) {
        // Show/hide page top button on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                topBtn.classList.add('visible');
            } else {
                topBtn.classList.remove('visible');
            }
        });

        // Scroll to top on click
        const topBtnLink = topBtn.querySelector('a');
        if (topBtnLink) {
            topBtnLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
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

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!spMenu.contains(e.target) && !menuSpList.contains(e.target)) {
                spMenu.classList.remove('active');
                menuSpList.classList.remove('active');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore javascript:void(0) and empty hash
            if (href === '#' || href === 'javascript:void(0)' || href === '#!') {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = 62;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fadein');
    
    const checkFadeIn = () => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Trigger animation when element is 80% visible in viewport
            if (rect.top < windowHeight * 0.8) {
                element.classList.add('scrollin');
            }
        });
    };

    // Initial check for elements already in viewport
    checkFadeIn();

    // Check on scroll with throttle
    let scrollTimer;
    window.addEventListener('scroll', function() {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(checkFadeIn, 50);
    });
});
