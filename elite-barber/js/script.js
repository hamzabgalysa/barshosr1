/**
 * Custom JavaScript for Elite Barbershop Website
 */

document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Update Footer Copyright Year
     */
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    /**
     * Activate Navbar Link based on current page
     */
    const setActiveNavLink = () => {
        const currentLocation = window.location.pathname.split('/').pop(); // Get the current file name (e.g., "about.html")
        const navLinks = document.querySelectorAll('#navbarNav .nav-link');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop(); // Get the file name from the link's href

            // Remove active class from all links first
            link.classList.remove('active');
            link.removeAttribute('aria-current'); // Remove aria-current attribute as well

            // Add active class if the link path matches the current location
            // Special case for index.html (homepage)
            if ((currentLocation === '' || currentLocation === 'index.html') && (linkPath === '' || linkPath === 'index.html')) {
                 link.classList.add('active');
                 link.setAttribute('aria-current', 'page');
            } else if (currentLocation === linkPath && linkPath !== 'index.html') {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    };

    setActiveNavLink(); // Call the function on page load

    /**
     * Bootstrap Form Validation Initialization (already in contact.html, keep here for potential future forms)
     */
    (function () {
      var forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, false)
        })
    })();

    // Add more custom JS functions here as needed

});
