// Theme switching functionality
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        themeIcon.classList.toggle('fa-moon');
        themeIcon.classList.toggle('fa-sun');
    });
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initTheme);

// Existing email function
function sendEmail() {
    // Encode the email address parts
    const username = 'chriswrendev';
    const domain = 'gmail.com';
    const email = username + '@' + domain;
    
    // Open the default email client
    window.location.href = 'mailto:' + email;
} 