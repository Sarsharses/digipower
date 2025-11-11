document.addEventListener('DOMContentLoaded', () => {
    // Ensure there's a container for the navbar
    let navbarContainer = document.getElementById('navbar');

    if (!navbarContainer) {
        // If no container exists, create one at the top of <body>
        navbarContainer = document.createElement('div');
        navbarContainer.id = 'navbar';
        document.body.prepend(navbarContainer);
    }

    // Load the navbar HTML fragment (relative to the HTML page)
    fetch('../common/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load navbar: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            navbarContainer.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            navbarContainer.innerHTML = '<p style="color:red;">Navbar kon niet worden geladen.</p>';
        });
});