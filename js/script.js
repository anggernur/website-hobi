// ============= Form Submission ============= 
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Mohon lengkapi semua field!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Mohon masukkan email yang valid!');
                return;
            }
            
            // Show success message
            alert(`Terima kasih ${name}! Pesan Anda telah dikirim.\nKami akan segera menghubungi Anda di ${email}`);
            
            // Reset form
            contactForm.reset();
        });
    }
});

// ============= Page Transition Animation Handler ============= 
function addPageTransitionAnimation() {
    // Create transition overlay
    const overlay = document.createElement('div');
    overlay.id = 'pageTransitionOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #FFD60A, #FFC300);
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease;
    `;
    document.body.appendChild(overlay);
    return overlay;
}

const pageOverlay = addPageTransitionAnimation();

// ============= Smooth Scroll & Active Nav Link ============= 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Add exit animation
            const currentSection = document.querySelector('section[id]');
            if (currentSection) {
                currentSection.style.animation = 'fadeOutDown 0.4s ease-in forwards';
            }
            
            // Transition effect
            pageOverlay.style.opacity = '0.1';
            
            // Scroll after short delay
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                pageOverlay.style.opacity = '0';
            }, 200);
            
            // Enter animation for target section
            setTimeout(() => {
                target.style.animation = 'slideInUp 0.6s ease-out forwards';
            }, 250);
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============= Add active nav link styles ============= 
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
        border-bottom: 3px solid var(--primary-color);
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

// ============= Enhanced Page Transition with Multiple Animation Styles ============= 
const transitionAnimations = [
    'pageSlideInUp',
    'pageSlideInDown',
    'pageSlideInLeft',
    'pageSlideInRight',
    'zoomInPage',
    'blurInPage'
];

let currentAnimationIndex = 0;

function getNextAnimation() {
    const animation = transitionAnimations[currentAnimationIndex];
    currentAnimationIndex = (currentAnimationIndex + 1) % transitionAnimations.length;
    return animation;
}

// Create scroll progress indicator
const progressBar = document.createElement('div');
progressBar.id = 'scrollProgress';
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #FFD60A, #FFC300, #45B7D1);
    width: 0%;
    z-index: 999;
    transition: width 0.2s ease;
    box-shadow: 0 0 10px rgba(255, 214, 10, 0.5);
`;
document.body.appendChild(progressBar);

// Update progress bar on scroll
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// ============= Smooth Scroll with Enhanced Transition ============= 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        
        // Get all sections
        const allSections = document.querySelectorAll('section[id]');
        const targetSection = target.closest('section[id]');
        
        // Add exit animation to all visible sections
        allSections.forEach(section => {
            if (section !== targetSection) {
                section.style.animation = 'fadeOutDown 0.4s ease-in forwards';
                section.style.pointerEvents = 'none';
            }
        });
        
        // Show transition overlay
        pageOverlay.style.opacity = '0.2';
        pageOverlay.style.pointerEvents = 'auto';
        
        // Smooth scroll
        setTimeout(() => {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            pageOverlay.style.opacity = '0';
            pageOverlay.style.pointerEvents = 'none';
        }, 200);
        
        // Add entrance animation with rotation effect
        setTimeout(() => {
            if (targetSection) {
                const nextAnimation = getNextAnimation();
                targetSection.style.animation = `${nextAnimation} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
                targetSection.style.pointerEvents = 'auto';
                
                // Animate inner content
                const innerElements = targetSection.querySelectorAll('h2, p, .hobby-card, .trick-card, .gallery-item');
                innerElements.forEach((el, index) => {
                    el.style.animation = 'none';
                    el.style.opacity = '0';
                    setTimeout(() => {
                        el.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`;
                    }, 400);
                });
            }
        }, 250);
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});

// ============= Gallery Image Placeholder Generator ============= 
// This function creates placeholder images if real images are not available
function loadGalleryImages() {
    const galleryImages = document.querySelectorAll('#galeri img');
    
    galleryImages.forEach((img, index) => {
        // If image fails to load, create a placeholder
        img.addEventListener('error', function() {
            // Create placeholder with skateboard theme colors
            const colors = [
                '#FF6B6B', '#4ECDC4', '#45B7D1',
                '#FFA07A', '#98D8C8', '#F7DC6F'
            ];
            const bgColor = colors[index % colors.length];
            
            this.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='${bgColor.replace('#', '%23')}' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3ESkating Photo ${index + 1}%3C/text%3E%3C/svg%3E`;
            this.style.opacity = '0.8';
        });
    });
}

// Load gallery images
loadGalleryImages();

// ============= Navbar Collapse on Click ============= 
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggle) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggle.click();
            }
        });
    });
}

// ============= Scroll Animation ============= 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in animation for cards
document.querySelectorAll('.hobby-card, .trick-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add fadeInUp animation to style
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyle);

// ============= Add Scroll to Top Button ============= 
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #FFD60A, #FFC300);
    color: #000;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 5px 20px rgba(255, 214, 10, 0.4);
    transition: all 0.3s ease;
    z-index: 999;
    font-weight: bold;
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effects for scroll to top button
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.15) translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1) translateY(0)';
});

// ============= Add Skill Level Animation ============= 
document.querySelectorAll('.trick-card').forEach(card => {
    const badge = card.querySelector('.badge');
    if (badge) {
        badge.style.cursor = 'pointer';
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// ============= Counter Animation for Stats (Optional) ============= 
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 50);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 50);
}

console.log('Skateboard Website Script Loaded Successfully! 🛹');
