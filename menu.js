// Menu functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Get menu elements
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Check if elements exist to prevent errors
    if (!menuBtn || !navbar) {
        console.error('Menu elements not found');
        return;
    }

    // Toggle menu on button click
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
        navbar.classList.toggle('active');
        
        // Toggle menu icon (optional enhancement)
        const menuIcon = menuBtn.querySelector('.material-icons-sharp');
        if (menuIcon) {
            menuIcon.textContent = navbar.classList.contains('active') ? 'close' : 'menu';
        }
    });

    // Close menu when clicking anywhere outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
            navbar.classList.remove('active');
            
            // Reset menu icon
            const menuIcon = menuBtn.querySelector('.material-icons-sharp');
            if (menuIcon) {
                menuIcon.textContent = 'menu';
            }
        }
    });

    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            
            // Reset menu icon
            const menuIcon = menuBtn.querySelector('.material-icons-sharp');
            if (menuIcon) {
                menuIcon.textContent = 'menu';
            }
        });
    });

    // Prevent menu from staying open on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) { // Your mobile breakpoint
            navbar.classList.remove('active');
            
            // Reset menu icon
            const menuIcon = menuBtn.querySelector('.material-icons-sharp');
            if (menuIcon) {
                menuIcon.textContent = 'menu';
            }
        }
    });
});