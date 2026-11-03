// Function na nagse-save ng preference kapag pinalitan ang switch state
function saveThemePreference() {
    const themeCheckbox = document.getElementById('theme-toggle');
    if (themeCheckbox) {
        if (themeCheckbox.checked) {
            localStorage.setItem('solaris_theme', 'dark');
        } else {
            localStorage.setItem('solaris_theme', 'light');
        }
    }
}

// Function na nag-a-apply ng naka-save na tema sa sandaling mag-load ang pahina
function applySavedTheme() {
    const savedTheme = localStorage.getItem('solaris_theme');
    const themeCheckbox = document.getElementById('theme-toggle');
    
    if (themeCheckbox) {
        if (savedTheme === 'dark') {
            themeCheckbox.checked = true;
        } else {
            themeCheckbox.checked = false;
        }
    }
}

// Patakbuhin ang pag-check ng tema bago o pagka-load ng DOM
document.addEventListener('DOMContentLoaded', applySavedTheme);