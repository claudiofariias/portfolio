document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(31, 41, 55, 0.95)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.background = 'rgba(31, 41, 55, 0.8)';
            navbar.style.padding = '20px 0';
        }
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-category, .project-card, .contact-info, .contact-illustration');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .contact-info, .contact-illustration');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    animateOnScroll();
    
    // Project card hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(30, 64, 175, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Skill items animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.animation = 'fadeIn 0.5s ease forwards';
    });
    
    // Função para mostrar mensagem de projeto privado
    function initPrivateProjectMessage() {
        document.querySelectorAll('.view-details').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Esconde o link "Ver Detalhes"
                this.style.display = 'none';
                
                // Mostra a mensagem de projeto privado
                const privateMessage = this.nextElementSibling;
                if (privateMessage && privateMessage.classList.contains('project-private')) {
                    privateMessage.style.display = 'block';
                }
            });
        });
    }
    
    // Inicializar quando o documento estiver pronto
    initPrivateProjectMessage();
});