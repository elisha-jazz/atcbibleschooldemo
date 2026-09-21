document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const toggleIcon = navToggle.querySelector('i');
    const dropdownIcons = document.querySelectorAll('.dropdown > a .fa-chevron-down');

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

    // Toggle sub-menus when tapping the arrow icon on mobile
    dropdownIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            if (window.innerWidth < 768) {
                e.preventDefault();
                e.stopPropagation(); // Prevents navigating away
                const dropdownParent = icon.closest('.dropdown');
                dropdownParent.classList.toggle('open');
            }
        });
    });
});