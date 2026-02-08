// Background toggle
document.getElementById('bg-toggle').addEventListener('click', function() {
    document.body.classList.toggle('beige-bg');
    document.body.classList.toggle('black-bg');
});

// Fade-in animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));