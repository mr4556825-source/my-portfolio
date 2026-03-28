const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (themeIcon) {
            isDark ? themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill') 
                   : themeIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        }
    });
}


const textElement = document.getElementById('typewriter');
const words = ["Web Developer", "UI/UX Designer", "Problem Solver", "Creative Thinker"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (!textElement) return;

    const currentWord = words[wordIndex];
    const textToShow = isDeleting 
        ? currentWord.substring(0, charIndex - 1) 
        : currentWord.substring(0, charIndex + 1);

    textElement.textContent = textToShow;
    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    let typeSpeed = isDeleting ? 70 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // وقفة أطول عند اكتمال الكلمة
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);


const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));


const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn?.classList.remove('d-none');
    } else {
        backToTopBtn?.classList.add('d-none');
    }
});

backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


const contactForm = document.getElementById('contactForm');
const successAlert = document.getElementById('successAlert');

contactForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if (this.checkValidity()) {
        
        successAlert?.classList.remove('d-none');
        this.reset();
        this.classList.remove('was-validated');
        
        setTimeout(() => successAlert?.classList.add('d-none'), 5000);
    } else {
        e.stopPropagation();
    }
    this.classList.add('was-validated');
});


const yearSpan = document.getElementById('currentYear');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();