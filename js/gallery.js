// Lightbox Functions
function openLightbox(element) {
    const modal = document.getElementById('lightbox');
    const modalImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');

    modal.classList.add('active');
    modalImg.src = element.src;
    captionText.innerText = element.alt || element.nextElementSibling?.innerText || '';
}

function closeLightbox(event) {
    // Isara lang kapag ang background/modal ang pinindot, hindi ang mismong larawan
    if (event.target.id === 'lightbox') {
        document.getElementById('lightbox').classList.remove('active');
    }
}

function forceCloseLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Pwede ring isara sa pagpindot ng Esc key sa keyboard
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        forceCloseLightbox();
    }
});

// Theme Toggle Functions
function saveThemePreference() {
    const themeCheckbox = document.getElementById('theme-toggle');
    if (themeCheckbox.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('solaris_theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('solaris_theme', 'light');
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('solaris_theme');
    const themeCheckbox = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        if (themeCheckbox) themeCheckbox.checked = true;
        document.body.classList.add('dark-mode');
    } else {
        if (themeCheckbox) themeCheckbox.checked = false;
        document.body.classList.remove('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', applySavedTheme);
