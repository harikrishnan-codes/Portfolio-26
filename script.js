// hamburger js 

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});








// hero js

const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove("active");

    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 4000);









// portfolio js 

const filterButtons = document.querySelectorAll(".portfolio-filters button");
const cards = document.querySelectorAll(".p-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        document.querySelector(".portfolio-filters .active")
            .classList.remove("active");

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        cards.forEach(card => {
            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});







// testimonials js 

const testimonials = document.querySelectorAll(".testimonial-card");
let currentTestimonial = 0;

function showNextTestimonial() {

    testimonials[currentTestimonial].classList.remove("active");

    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }

    testimonials[currentTestimonial].classList.add("active");
}

setInterval(showNextTestimonial, 4500);












// stats js 

const counters = document.querySelectorAll(".count");
let statsStarted = false;

function startCountUp() {

    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const speed = 200; // smaller = faster

        const updateCount = () => {
            const increment = Math.ceil(target / speed);
            count += increment;

            if (count < target) {
                counter.innerText = count;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

function handleScroll() {
    const statsSection = document.querySelector("#stats");
    const sectionTop = statsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100 && !statsStarted) {
        statsStarted = true;
        startCountUp();
    }
}

window.addEventListener("scroll", handleScroll);







// Header Scroll Effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Initial Trigger
reveal();