<script>
document.addEventListener("DOMContentLoaded", function() {
    function revealSections() {
        document.querySelectorAll(".hero, .about, .books, .contact").forEach(section => {
            const position = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (position < screenHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    // Run on scroll
    window.addEventListener("scroll", revealSections);

    // Run once to show sections on page load
    revealSections();
});
</script>