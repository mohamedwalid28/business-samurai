let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar')



menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const clientContainer = document.querySelector('.main-client');
    const scrollAmount = 200; // Adjust scroll amount as needed
    const scrollDelay = 600; // Adjust delay between scrolls as needed

    function autoScroll() {
        if (clientContainer.scrollLeft + clientContainer.clientWidth >= clientContainer.scrollWidth) {
            // If at the end, smoothly reset to the start
            clientContainer.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // Smoothly scroll to the next position
            clientContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    setInterval(autoScroll, scrollDelay); // Auto-scroll every 3 seconds
});