document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const toggleIcon = navToggle.querySelector('i');
    const dropdownTriggers = document.querySelectorAll('.dropdown > a');

    // Toggle main navigation menu
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Switch between hamburger and 'X' close icon
        if (navLinks.classList.contains('active')) {
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-xmark');
        } else {
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        }
    });

    // Toggle sub-menus on mobile screens
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            if (window.innerWidth < 768) {
                e.preventDefault(); // Prevent navigating away on touch
                const dropdownParent = trigger.parentElement;
                dropdownParent.classList.toggle('open');
            }
        });
    });
});