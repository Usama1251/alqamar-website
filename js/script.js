window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const hasPlus = counter.innerText.includes("+");
    const target = parseInt(counter.innerText);
    let count = 0;

    const updateCounter = () => {
        const increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count) + (hasPlus ? "+" : "");
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + (hasPlus ? "+" : "");
        }
    };

    updateCounter();
});