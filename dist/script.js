// Removed custom cursor functionality for better browser compatibility

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Navbar scroll effect and active section highlighting
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.7)';
    }
    
    // Highlight active section in navbar
    const sections = ['about', 'portfolio', 'street-posters', 'contact'];
    const navbarHeight = 70;
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (section && navLink) {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                // Add active class to current section's nav link
                navLink.classList.add('active');
            }
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Portfolio Scroll Arrows and Fade Effects
// Create separate functions for each portfolio category (like Pizza approach)
function initializeCarsPortfolio() {
    const scrollContainer = document.querySelector('.portfolio-scroll-container[data-category="cars"]');
    const portfolioGrid = scrollContainer?.querySelector('.portfolio-grid');
    const leftArrow = document.querySelector('.scroll-arrow-left[data-category="cars"]');
    const rightArrow = document.querySelector('.scroll-arrow-right[data-category="cars"]');
    const fadeLeft = scrollContainer?.querySelector('.portfolio-fade-left');
    const fadeRight = scrollContainer?.querySelector('.portfolio-fade-right');
    
    if (!portfolioGrid || !leftArrow || !rightArrow || !fadeLeft || !fadeRight) {
        console.log('Cars portfolio elements not found');
        return;
    }
    
    const scrollAmount = 320;
    
    leftArrow.addEventListener('click', () => {
        console.log('Cars Left arrow clicked');
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setTimeout(updateScrollEffects, 100);
    });
    
    rightArrow.addEventListener('click', () => {
        console.log('Cars Right arrow clicked');
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setTimeout(updateScrollEffects, 100);
    });
    
    function updateScrollEffects() {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        const maxScroll = scrollWidth - clientWidth;
        
        leftArrow.disabled = scrollLeft <= 5;
        rightArrow.disabled = scrollLeft >= maxScroll - 5;
        
        fadeLeft.style.opacity = scrollLeft <= 5 ? '0' : '1';
        fadeRight.style.opacity = scrollLeft >= maxScroll - 5 ? '0' : '1';
        
        if (maxScroll <= 0) {
            fadeLeft.style.opacity = '0';
            fadeRight.style.opacity = '0';
            leftArrow.disabled = true;
            rightArrow.disabled = true;
        }
    }
    
    scrollContainer.addEventListener('scroll', updateScrollEffects);
    setTimeout(updateScrollEffects, 100);
    window.addEventListener('resize', () => setTimeout(updateScrollEffects, 100));
}

function initializeMotorsPortfolio() {
    const scrollContainer = document.querySelector('.portfolio-scroll-container[data-category="motors"]');
    const portfolioGrid = scrollContainer?.querySelector('.portfolio-grid');
    const leftArrow = document.querySelector('.scroll-arrow-left[data-category="motors"]');
    const rightArrow = document.querySelector('.scroll-arrow-right[data-category="motors"]');
    const fadeLeft = scrollContainer?.querySelector('.portfolio-fade-left');
    const fadeRight = scrollContainer?.querySelector('.portfolio-fade-right');
    
    if (!portfolioGrid || !leftArrow || !rightArrow || !fadeLeft || !fadeRight) {
        console.log('Motors portfolio elements not found');
        return;
    }
    
    const scrollAmount = 320;
    
    leftArrow.addEventListener('click', () => {
        console.log('Motors Left arrow clicked');
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setTimeout(updateScrollEffects, 100);
    });
    
    rightArrow.addEventListener('click', () => {
        console.log('Motors Right arrow clicked');
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setTimeout(updateScrollEffects, 100);
    });
    
    function updateScrollEffects() {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        const maxScroll = scrollWidth - clientWidth;
        
        leftArrow.disabled = scrollLeft <= 5;
        rightArrow.disabled = scrollLeft >= maxScroll - 5;
        
        fadeLeft.style.opacity = scrollLeft <= 5 ? '0' : '1';
        fadeRight.style.opacity = scrollLeft >= maxScroll - 5 ? '0' : '1';
        
        if (maxScroll <= 0) {
            fadeLeft.style.opacity = '0';
            fadeRight.style.opacity = '0';
            leftArrow.disabled = true;
            rightArrow.disabled = true;
        }
    }
    
    scrollContainer.addEventListener('scroll', updateScrollEffects);
    setTimeout(updateScrollEffects, 100);
    window.addEventListener('resize', () => setTimeout(updateScrollEffects, 100));
}

function initializeHelmetsPortfolio() {
    const scrollContainer = document.querySelector('.portfolio-scroll-container[data-category="helmets"]');
    const portfolioGrid = scrollContainer?.querySelector('.portfolio-grid');
    const leftArrow = document.querySelector('.scroll-arrow-left[data-category="helmets"]');
    const rightArrow = document.querySelector('.scroll-arrow-right[data-category="helmets"]');
    const fadeLeft = scrollContainer?.querySelector('.portfolio-fade-left');
    const fadeRight = scrollContainer?.querySelector('.portfolio-fade-right');
    
    if (!portfolioGrid || !leftArrow || !rightArrow || !fadeLeft || !fadeRight) {
        console.log('Helmets portfolio elements not found');
        return;
    }
    
    const scrollAmount = 320;
    
    leftArrow.addEventListener('click', () => {
        console.log('Helmets Left arrow clicked');
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setTimeout(updateScrollEffects, 100);
    });
    
    rightArrow.addEventListener('click', () => {
        console.log('Helmets Right arrow clicked');
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setTimeout(updateScrollEffects, 100);
    });
    
    function updateScrollEffects() {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        const maxScroll = scrollWidth - clientWidth;
        
        leftArrow.disabled = scrollLeft <= 5;
        rightArrow.disabled = scrollLeft >= maxScroll - 5;
        
        fadeLeft.style.opacity = scrollLeft <= 5 ? '0' : '1';
        fadeRight.style.opacity = scrollLeft >= maxScroll - 5 ? '0' : '1';
        
        if (maxScroll <= 0) {
            fadeLeft.style.opacity = '0';
            fadeRight.style.opacity = '0';
            leftArrow.disabled = true;
            rightArrow.disabled = true;
        }
    }
    
    scrollContainer.addEventListener('scroll', updateScrollEffects);
    setTimeout(updateScrollEffects, 100);
    window.addEventListener('resize', () => setTimeout(updateScrollEffects, 100));
}

// Portfolio categories will be initialized in DOMContentLoaded

// Awards Scroll Functionality
function initializeAwardsScroll() {
    const scrollContainer = document.querySelector('.awards-scroll-container');
    const awardsGrid = document.querySelector('.awards-grid');
    const leftArrow = document.querySelector('.scroll-arrow-left[data-category="awards"]');
    const rightArrow = document.querySelector('.scroll-arrow-right[data-category="awards"]');
    const fadeLeft = document.querySelector('.awards-fade-left');
    const fadeRight = document.querySelector('.awards-fade-right');
    
    if (!awardsGrid || !leftArrow || !rightArrow || !fadeLeft || !fadeRight) return;
    
    const scrollAmount = 300; // pixels to scroll per click
    
    // Arrow click handlers
    leftArrow.addEventListener('click', () => {
        awardsGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    rightArrow.addEventListener('click', () => {
        awardsGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Update arrow states and fade effects
    function updateScrollEffects() {
        const { scrollLeft, scrollWidth, clientWidth } = awardsGrid;
        const maxScroll = scrollWidth - clientWidth;
        
        // Update arrow states
        leftArrow.disabled = scrollLeft <= 5;
        rightArrow.disabled = scrollLeft >= maxScroll - 5;
        
        // Update fade effects
        if (scrollLeft <= 5) {
            fadeLeft.classList.add('hidden');
        } else {
            fadeLeft.classList.remove('hidden');
        }
        
        if (scrollLeft >= maxScroll - 5) {
            fadeRight.classList.add('hidden');
        } else {
            fadeRight.classList.remove('hidden');
        }
        
        // Hide fades if no overflow
        if (maxScroll <= 0) {
            fadeLeft.classList.add('hidden');
            fadeRight.classList.add('hidden');
            leftArrow.disabled = true;
            rightArrow.disabled = true;
        }
    }
    
    // Listen for scroll events
    awardsGrid.addEventListener('scroll', updateScrollEffects);
    
    // Initial check
    setTimeout(updateScrollEffects, 100);
    
    // Update on window resize
    window.addEventListener('resize', () => {
        setTimeout(updateScrollEffects, 100);
    });
}

// Portfolio items will be initialized in DOMContentLoaded

// Project Alfa Scroll Functionality
function initializeProjectAlfa() {
    const scrollContainer = document.querySelector('.alfa-carousel-content-full .alfa-scroll-container');
    const alfaGrid = document.querySelector('.alfa-carousel-content-full .alfa-grid');
    const leftArrow = document.querySelector('.alfa-arrow-left');
    const rightArrow = document.querySelector('.alfa-arrow-right');
    const fadeLeft = document.querySelector('.alfa-carousel-content-full .alfa-fade-left');
    const fadeRight = document.querySelector('.alfa-carousel-content-full .alfa-fade-right');
    
    if (!alfaGrid || !leftArrow || !rightArrow || !fadeLeft || !fadeRight) {
        console.log('Project Alfa elements not found');
        return;
    }
    
    const scrollAmount = 320; // pixels to scroll per click (optimized for 3-item view)
    
    // Arrow click handlers
    leftArrow.addEventListener('click', () => {
        console.log('Alfa Left arrow clicked');
        alfaGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateScrollEffects, 100);
    });
    
    rightArrow.addEventListener('click', () => {
        console.log('Alfa Right arrow clicked');
        alfaGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateScrollEffects, 100);
    });
    
    // Update arrow states, fade effects, and center image highlighting
    function updateScrollEffects() {
        const { scrollLeft, scrollWidth, clientWidth } = alfaGrid;
        const maxScroll = scrollWidth - clientWidth;
        
        // Update arrow states
        leftArrow.disabled = scrollLeft <= 5;
        rightArrow.disabled = scrollLeft >= maxScroll - 5;
        
        // Update fade effects
        if (scrollLeft <= 5) {
            fadeLeft.style.opacity = '0';
        } else {
            fadeLeft.style.opacity = '1';
        }
        
        if (scrollLeft >= maxScroll - 5) {
            fadeRight.style.opacity = '0';
        } else {
            fadeRight.style.opacity = '1';
        }
        
        // Hide fades if no overflow
        if (maxScroll <= 0) {
            fadeLeft.style.opacity = '0';
            fadeRight.style.opacity = '0';
            leftArrow.disabled = true;
            rightArrow.disabled = true;
        }
        
        // Update center image highlighting
        updateCenterImage();
    }
    
    // Function to highlight the center image
    function updateCenterImage() {
        const items = alfaGrid.querySelectorAll('.alfa-item');
        const containerRect = scrollContainer.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        let centerItem = null;
        let minDistance = Infinity;
        
        items.forEach(item => {
            item.classList.remove('center');
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.left + itemRect.width / 2;
            const distance = Math.abs(containerCenter - itemCenter);
            
            if (distance < minDistance) {
                minDistance = distance;
                centerItem = item;
            }
        });
        
        if (centerItem) {
            centerItem.classList.add('center');
        }
    }
    
    // Listen for scroll events
    alfaGrid.addEventListener('scroll', updateScrollEffects);
    
    // Initial check
    setTimeout(updateScrollEffects, 100);
    
    // Update on window resize
    window.addEventListener('resize', () => {
        setTimeout(updateScrollEffects, 100);
    });
}

// Story Scroll Functionality
function initializeStoryScroll() {
    const storyContainer = document.querySelector('.story-text');
    const upArrow = document.querySelector('.story-arrow-up');
    const downArrow = document.querySelector('.story-arrow-down');
    const fadeTop = document.querySelector('.story-fade-top');
    const fadeBottom = document.querySelector('.story-fade-bottom');
    
    if (!storyContainer || !upArrow || !downArrow || !fadeTop || !fadeBottom) return;
    
    const scrollAmount = 80; // pixels to scroll per click
    
    // Arrow click handlers
    upArrow.addEventListener('click', () => {
        storyContainer.scrollBy({
            top: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    downArrow.addEventListener('click', () => {
        storyContainer.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Update arrow states and fade effects
    function updateScrollEffects() {
        const { scrollTop, scrollHeight, clientHeight } = storyContainer;
        const maxScroll = scrollHeight - clientHeight;
        
        // Update arrow states
        upArrow.disabled = scrollTop <= 5;
        downArrow.disabled = scrollTop >= maxScroll - 5;
        
        // Update fade effects
        if (scrollTop <= 5) {
            fadeTop.style.opacity = '0';
        } else {
            fadeTop.style.opacity = '1';
        }
        
        if (scrollTop >= maxScroll - 5) {
            fadeBottom.style.opacity = '0';
        } else {
            fadeBottom.style.opacity = '1';
        }
        
        // Hide fades if no overflow
        if (maxScroll <= 0) {
            fadeTop.style.opacity = '0';
            fadeBottom.style.opacity = '0';
            upArrow.disabled = true;
            downArrow.disabled = true;
        }
    }
    
    // Listen for scroll events
    storyContainer.addEventListener('scroll', updateScrollEffects);
    
    // Initial check
    setTimeout(updateScrollEffects, 100);
    
    // Update on window resize
    window.addEventListener('resize', () => {
        setTimeout(updateScrollEffects, 100);
    });
}

// Pizza Project Scroll Functionality
function initializePizzaProject() {
    const scrollContainer = document.querySelector('.pizza-carousel-content-full .pizza-scroll-container');
    const pizzaGrid = document.querySelector('.pizza-carousel-content-full .pizza-grid');
    const leftArrow = document.querySelector('.pizza-arrow-left');
    const rightArrow = document.querySelector('.pizza-arrow-right');
    const fadeLeft = document.querySelector('.pizza-carousel-content-full .pizza-fade-left');
    const fadeRight = document.querySelector('.pizza-carousel-content-full .pizza-fade-right');
    
    if (!pizzaGrid || !leftArrow || !rightArrow || !fadeLeft || !fadeRight) {
        console.log('Pizza elements not found');
        return;
    }
    
    const scrollAmount = 320; // pixels to scroll per click (optimized for 3-item view)
    
    // Arrow click handlers
    leftArrow.addEventListener('click', () => {
        console.log('Pizza Left arrow clicked');
        pizzaGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateScrollEffects, 100);
    });
    
    rightArrow.addEventListener('click', () => {
        console.log('Pizza Right arrow clicked');
        pizzaGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateScrollEffects, 100);
    });
    
    // Update arrow states, fade effects, and center image highlighting
    function updateScrollEffects() {
        const { scrollLeft, scrollWidth, clientWidth } = pizzaGrid;
        const maxScroll = scrollWidth - clientWidth;
        
        // Update arrow states
        leftArrow.disabled = scrollLeft <= 5;
        rightArrow.disabled = scrollLeft >= maxScroll - 5;
        
        // Update fade effects
        if (scrollLeft <= 5) {
            fadeLeft.style.opacity = '0';
        } else {
            fadeLeft.style.opacity = '1';
        }
        
        if (scrollLeft >= maxScroll - 5) {
            fadeRight.style.opacity = '0';
        } else {
            fadeRight.style.opacity = '1';
        }
        
        // Hide fades if no overflow
        if (maxScroll <= 0) {
            fadeLeft.style.opacity = '0';
            fadeRight.style.opacity = '0';
            leftArrow.disabled = true;
            rightArrow.disabled = true;
        }
        
        // Update center image highlighting
        updateCenterImagePizza();
    }
    
    // Function to highlight the center image
    function updateCenterImagePizza() {
        const items = pizzaGrid.querySelectorAll('.pizza-item');
        const containerRect = scrollContainer.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        let centerItem = null;
        let minDistance = Infinity;
        
        items.forEach(item => {
            item.classList.remove('center');
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.left + itemRect.width / 2;
            const distance = Math.abs(containerCenter - itemCenter);
            
            if (distance < minDistance) {
                minDistance = distance;
                centerItem = item;
            }
        });
        
        if (centerItem) {
            centerItem.classList.add('center');
        }
    }
    
    // Listen for scroll events
    pizzaGrid.addEventListener('scroll', updateScrollEffects);
    
    // Initial check
    setTimeout(updateScrollEffects, 100);
    
    // Update on window resize
    window.addEventListener('resize', () => {
        setTimeout(updateScrollEffects, 100);
    });
}

// Pizza Text Scroll Functionality
function initializePizzaTextScroll() {
    const textContainer = document.querySelector('.pizza-description');
    const upArrow = document.querySelector('.pizza-story-arrow-up');
    const downArrow = document.querySelector('.pizza-story-arrow-down');
    const fadeTop = document.querySelector('.pizza-fade-top');
    const fadeBottom = document.querySelector('.pizza-fade-bottom');
    
    if (!textContainer || !upArrow || !downArrow || !fadeTop || !fadeBottom) return;
    
    const scrollAmount = 80; // pixels to scroll per click
    
    // Arrow click handlers
    upArrow.addEventListener('click', () => {
        textContainer.scrollBy({
            top: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    downArrow.addEventListener('click', () => {
        textContainer.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Update arrow states and fade effects
    function updateScrollEffects() {
        const { scrollTop, scrollHeight, clientHeight } = textContainer;
        const maxScroll = scrollHeight - clientHeight;
        
        // Update arrow states
        upArrow.disabled = scrollTop <= 5;
        downArrow.disabled = scrollTop >= maxScroll - 5;
        
        // Update fade effects
        if (scrollTop <= 5) {
            fadeTop.style.opacity = '0';
        } else {
            fadeTop.style.opacity = '1';
        }
        
        if (scrollTop >= maxScroll - 5) {
            fadeBottom.style.opacity = '0';
        } else {
            fadeBottom.style.opacity = '1';
        }
        
        // Hide fades if no overflow
        if (maxScroll <= 0) {
            fadeTop.style.opacity = '0';
            fadeBottom.style.opacity = '0';
            upArrow.disabled = true;
            downArrow.disabled = true;
        }
    }
    
    // Listen for scroll events
    textContainer.addEventListener('scroll', updateScrollEffects);
    
    // Initial check
    setTimeout(updateScrollEffects, 100);
    
    // Update on window resize
    window.addEventListener('resize', () => {
        setTimeout(updateScrollEffects, 100);
    });
}

// Initialize all sections after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Initialize portfolio items as visible
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            item.classList.add('visible');
        });
        
        // Initialize portfolio-related functions
        addPortfolioAnimationDelays();
        initializeLightbox();
        
        // Initialize portfolio categories (separate functions like Pizza approach)
        initializeCarsPortfolio();
        initializeMotorsPortfolio();
        initializeHelmetsPortfolio();
        
        // Initialize project sections
        initializeProjectAlfa();
        initializeAseamProject();
        initializeStoryScroll();
        initializePizzaProject();
        initializePizzaTextScroll();
        initializeAwardsScroll();
    }, 500);
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxClose = document.querySelector('.lightbox-close');

// Sample artwork data
const artworkData = {
    'Motorcycle Study #1': {
        title: 'Motorcycle Study #1',
        description: 'A detailed study of urban transportation, capturing the essence of city mobility and freedom.'
    },
    'Classic Car Portrait': {
        title: 'Classic Car Portrait',
        description: 'Vintage automotive artistry showcasing the timeless beauty of classic car design.'
    },
    'Racing Helmet Collection': {
        title: 'Racing Helmet Collection',
        description: 'A collection of racing helmets that tell stories of speed, passion, and human ambition.'
    },
    'Bus Stop Morning': {
        title: 'Bus Stop Morning',
        description: 'Everyday urban life captured in the quiet moments of morning commute.'
    },
    'Pizza Market Scene': {
        title: 'Pizza Market Scene',
        description: 'The vibrant energy of local food markets and community gathering spaces.'
    },
    'Urban Corner #3': {
        title: 'Urban Corner #3',
        description: 'Hidden corners of the city that reveal the character and soul of urban living.'
    },
    '"Be Kind" Street Poster': {
        title: '"Be Kind" Street Poster',
        description: 'Part of the positive message campaign spreading kindness throughout the city.'
    },
    '"Community Matters" Design': {
        title: '"Community Matters" Design',
        description: 'A powerful reminder of the importance of community connection and support.'
    },
    '"Spread Love" Campaign': {
        title: '"Spread Love" Campaign',
        description: 'An uplifting message designed to brighten someone\'s day and spread positivity.'
    }
};

// Open lightbox - will be initialized in DOMContentLoaded
function initializeLightbox() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const artworkTitle = item.querySelector('span').textContent;
            const artwork = artworkData[artworkTitle];
            
            if (artwork) {
                lightboxTitle.textContent = artwork.title;
                lightboxDescription.textContent = artwork.description;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// Contact Form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        const navbarHeight = 70;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Smooth scrolling for internal links with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = 70;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    const rate = scrolled * -0.5;
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    // Remove any loading states
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Enhanced hover effects for awards
const awardItems = document.querySelectorAll('.award-item');
awardItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Poster showcase hover effects
const posterItems = document.querySelectorAll('.poster-item');
posterItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const image = item.querySelector('.poster-img');
        if (image) {
            image.style.transform = 'scale(1.05) rotate(2deg)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const image = item.querySelector('.poster-img');
        if (image) {
            image.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Add typing effect to hero subtitle
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            const text = subtitle.textContent;
            typeWriter(subtitle, text, 80);
        }
    }, 1000);
});

// Portfolio animation delays will be added in DOMContentLoaded
function addPortfolioAnimationDelays() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Enhanced scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Hide scroll indicator when scrolling
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollIndicator) {
        const scrollY = window.pageYOffset;
        if (scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '0.7';
        }
    }
});

// Add intersection observer for counting animation
const countElements = document.querySelectorAll('.highlight-number');
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.hasAnimated) {
            const target = parseInt(entry.target.textContent);
            animateCount(entry.target, target);
            entry.target.hasAnimated = true;
        }
    });
}, { threshold: 0.5 });

countElements.forEach(el => {
    countObserver.observe(el);
});

function animateCount(element, target) {
    let current = 0;
    const increment = target / 60; // 60 frames for smooth animation
    
    function updateCount() {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCount();
}

// Add easter egg - konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activated
        document.body.style.filter = 'hue-rotate(180deg)';
        showNotification('🎨 You found the artist\'s secret! Colors inverted!');
        
        setTimeout(() => {
            document.body.style.filter = '';
        }, 5000);
        
        konamiCode = [];
    }
});

console.log('🎨 NaidenovART Portfolio loaded! Try the Konami Code for a surprise...');

// Language switching functionality
let currentLanguage = 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with language data attributes
    const elements = document.querySelectorAll('[data-en][data-bg]');
    elements.forEach(element => {
        if (element.getAttribute(`data-${lang}`)) {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Store language preference
    localStorage.setItem('naidenovart-language', lang);
}

// Initialize language switching
document.addEventListener('DOMContentLoaded', () => {
    // Get saved language preference or default to English
    const savedLanguage = localStorage.getItem('naidenovart-language') || 'en';
    
    // Add click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Set initial language
    switchLanguage(savedLanguage);
});

// ASEAM Project Scroll Functionality
function initializeAseamProject() {
    const scrollContainer = document.querySelector('.aseam-carousel-content-full .aseam-scroll-container');
    const aseamGrid = document.querySelector('.aseam-carousel-content-full .aseam-grid');
    const leftArrow = document.querySelector('.aseam-arrow-left');
    const rightArrow = document.querySelector('.aseam-arrow-right');
    const fadeLeft = document.querySelector('.aseam-carousel-content-full .aseam-fade-left');
    const fadeRight = document.querySelector('.aseam-carousel-content-full .aseam-fade-right');
    
    if (!aseamGrid || !leftArrow || !rightArrow || !fadeLeft || !fadeRight) {
        console.log('ASEAM elements not found');
        return;
    }
    
         const scrollAmount = 320; // pixels to scroll per click (optimized for 3-item view)
     
     // Arrow click handlers
     leftArrow.addEventListener('click', () => {
         console.log('ASEAM Left arrow clicked');
         aseamGrid.scrollBy({
             left: -scrollAmount,
             behavior: 'smooth'
         });
         setTimeout(updateScrollEffects, 100);
     });
     
     rightArrow.addEventListener('click', () => {
         console.log('ASEAM Right arrow clicked');
         aseamGrid.scrollBy({
             left: scrollAmount,
             behavior: 'smooth'
         });
         setTimeout(updateScrollEffects, 100);
     });
    
         // Update arrow states, fade effects, and center image highlighting
     function updateScrollEffects() {
         const { scrollLeft, scrollWidth, clientWidth } = aseamGrid;
         const maxScroll = scrollWidth - clientWidth;
         
         // Update arrow states
         leftArrow.disabled = scrollLeft <= 5;
         rightArrow.disabled = scrollLeft >= maxScroll - 5;
         
         // Update fade effects
         if (scrollLeft <= 5) {
             fadeLeft.style.opacity = '0';
         } else {
             fadeLeft.style.opacity = '1';
         }
         
         if (scrollLeft >= maxScroll - 5) {
             fadeRight.style.opacity = '0';
         } else {
             fadeRight.style.opacity = '1';
         }
         
         // Hide fades if no overflow
         if (maxScroll <= 0) {
             fadeLeft.style.opacity = '0';
             fadeRight.style.opacity = '0';
             leftArrow.disabled = true;
             rightArrow.disabled = true;
         }
         
         // Update center image highlighting
         updateCenterImageAseam();
     }
     
     // Function to highlight the center image
     function updateCenterImageAseam() {
         const items = aseamGrid.querySelectorAll('.aseam-item');
         const containerRect = scrollContainer.getBoundingClientRect();
         const containerCenter = containerRect.left + containerRect.width / 2;
         
         let centerItem = null;
         let minDistance = Infinity;
         
         items.forEach(item => {
             item.classList.remove('center');
             const itemRect = item.getBoundingClientRect();
             const itemCenter = itemRect.left + itemRect.width / 2;
             const distance = Math.abs(containerCenter - itemCenter);
             
             if (distance < minDistance) {
                 minDistance = distance;
                 centerItem = item;
             }
         });
         
         if (centerItem) {
             centerItem.classList.add('center');
         }
     }
    
    // Listen for scroll events
    aseamGrid.addEventListener('scroll', updateScrollEffects);
    
    // Initial check
    setTimeout(updateScrollEffects, 100);
    
    // Update on window resize
    window.addEventListener('resize', () => {
        setTimeout(updateScrollEffects, 100);
    });
} 