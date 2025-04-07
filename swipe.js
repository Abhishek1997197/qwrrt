// This is a placeholder file.
// You can add custom swipe behavior here if needed in the future.

// Example: Scroll to next or previous "page" with arrow keys
document.addEventListener("keydown", function (e) {
    const container = document.querySelector(".swipe-container");
    if (e.key === "ArrowRight") {
        container.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    }
});
