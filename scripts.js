        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });

        // Close menu when clicking a nav link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Set footer year
        const today = new Date();
        const year = today.getFullYear();
        const yearElement = document.getElementById("year");
        if (yearElement) {
            yearElement.textContent = year;
            console.log("Year set to:", year);
        } else {
            console.error("Element with ID 'year' not found in DOM");
        }

        // Sticky Header
        const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Scroll to Top Button
        const scrollTop = document.querySelector('.scroll-top');
        window.addEventListener('scroll', () => {
            scrollTop.classList.toggle('active', window.scrollY > 500);
        });

        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Scroll Animation
        const fadeElements = document.querySelectorAll('.fade-in');
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(element => {
            observer.observe(element);
        });