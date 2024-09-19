// script.jsdocument.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');
    const themeToggle = document.getElementById('theme-toggle');
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        themeToggle.checked = savedTheme === 'dark';
    // Select the hamburger menu and the navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle the 'active' class when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
    // Toggle menu on hamburger icon click
    hamburgerIcon.addEventListener('click', function() {
        menuLinks.style.display = menuLinks.style.display === 'block' ? 'none' : 'block';
    });
    // Close menu if a link is clicked
    menuLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            menuLinks.style.display = 'none';
        }
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', function(e) {
        if (!hamburgerIcon.contains(e.target) && !menuLinks.contains(e.target)) {
            menuLinks.style.display = 'none';
        }
    });
    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
};
    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('theme-toggle');
    
        // Check if the user has a previously set theme preference
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true;
        }
    
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    });