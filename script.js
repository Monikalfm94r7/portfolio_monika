// ===============================
// Typing Animation
// ===============================

const typingText = document.getElementById("typing");

const words = [
    "AI & ML Student",
    "Web Developer",
    "Python Learner",
    "Future AI Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior:'smooth'
        });

    });

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Fade In on Scroll
// ===============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll(".skill-card,.project-card,.education-card,.certificate-card,.about-content,.contact-container").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all 0.8s ease";

    observer.observe(el);

});


// ===============================
// Welcome Message
// ===============================

window.onload = function(){

    console.log("Welcome to Monika Rajpurohit's Portfolio!");

};