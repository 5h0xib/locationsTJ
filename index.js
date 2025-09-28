document.addEventListener('DOMContentLoaded', function() {
    const locationCards = document.querySelectorAll('.location-card');
    
    locationCards.forEach(card => {
        const header = card.querySelector('.location-header');
        
        header.addEventListener('click', function() {
            // Close all other open cards
            locationCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                }
            });
            
            // Toggle the clicked card
            card.classList.toggle('active');
        });
    });
});

// Initialize AOS with custom settings
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true, // Animations will happen only once
    offset: 100 // Offset (in px) from the original trigger point
});


document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggle.checked = true;
    }
    
    // Add event listener to toggle switch
    toggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});