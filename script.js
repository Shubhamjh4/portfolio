// Select all links with hashes
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        // Scroll smoothly to the target element
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
