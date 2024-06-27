document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextSlide, 6000); // Change slide every 6 seconds

    // Project Section
    function showNextProjects() {
        const projectsInner = document.querySelector('.projects-inner');
        const projectCount = document.querySelectorAll('.project').length;
        const visibleProjects = 3;
        const totalSlides = Math.ceil(projectCount / visibleProjects);

        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = currentIndex * 100 / visibleProjects;

        projectsInner.style.transform = `translateX(-${offset}%)`;
    }

    setInterval(showNextProjects, 5000); // Change slide every 5 seconds

    // Stakeholders Section
    document.querySelectorAll('.stakeholder-track').forEach(track => {
        track.addEventListener('mouseover', () => {
            track.style.animationPlayState = 'paused';
        });
        track.addEventListener('mouseout', () => {
            track.style.animationPlayState = 'running';
        });
    });

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});


// ACTIVE NAV BAR

document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll("nav ul li a");
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }
});


// MKAING X FOR TWITER

document.addEventListener("DOMContentLoaded", function() {
    FontAwesome.library.add({
        prefix: 'fab',
        iconName: 'x-logo',
        icon: [448, 512, [], "e001", "M438.6 75.5l-20.8-20.8c-5.4-5.4-14.2-5.4-19.6 0L224 229.8 50.8 56.7c-5.4-5.4-14.2-5.4-19.6 0L10.4 75.5c-5.4 5.4-5.4 14.2 0 19.6L183.6 256 10.4 429.2c-5.4 5.4-5.4 14.2 0 19.6l20.8 20.8c5.4 5.4 14.2 5.4 19.6 0L224 282.2l173.2 173.2c5.4 5.4 14.2 5.4 19.6 0l20.8-20.8c5.4-5.4 5.4-14.2 0-19.6L264.4 256 438.6 95.1c5.4-5.4 5.4-14.2 0-19.6z"]
    });
});


// TEXT OVERLAY MESSAGE

// document.addEventListener("DOMContentLoaded", function () {
//     const textOverlay = document.querySelector('.text-overlay');
//     const messages = [
//         "Contact Us",
//         "Welcome to Nova Shipping Limited",
//         "We are happy to have you"
//     ];
//     let index = 0;

//     function addText() {
//         if (index < messages.length) {
//             const span = document.createElement('span');
//             span.textContent = messages[index];
//             textOverlay.appendChild(span);
//             index++;
//         }
//     }

//     // Add text one by one with a delay
//     messages.forEach((message, i) => {
//         setTimeout(() => addText(), i * 1500);
//     });
// });


// FORM VALIDATION

// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;

//     if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
//         alert("Please fill out all fields.");
//         return false;
//     }

//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email address.");
//         return false;
//     }

//     var phonePattern = /^\+?\d{1,4}?[-.\s]?(\d{3})?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;
//     if (!phonePattern.test(phone)) {
//         alert("Please enter a valid phone number.");
//         return false;
//     }

//     return true;
// }


// BLOG SECTION VIEW MORE

document.querySelectorAll('.view-more').forEach(function(button) {
    button.addEventListener('click', function() {
        var moreText = this.previousElementSibling;
        if (moreText.classList.contains('hidden')) {
            moreText.classList.remove('hidden');
            this.textContent = 'View Less';
        } else {
            moreText.classList.add('hidden');
            this.textContent = 'View More';
        }
    });
});

// TESTIMNIALS

// TESTIMONIALS
let slideIndex = 0;
const slides = document.getElementsByClassName("testimonial-slide")[0];
const dots = document.getElementsByClassName("dot");

function showSlides() {
    let totalSlides = Math.ceil(slides.children.length / 3);
    if (window.innerWidth <= 768) {
        totalSlides = slides.children.length;
    }

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

showSlides();

// Auto slideshow
// setInterval(() => {
//     slideIndex++;
//     showSlides();
// }, 9000); 

// Recalculate slides on window resize
window.addEventListener("resize", showSlides);


// INQUIRY SECTION

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('inquiryForm');
    const progressBar = document.getElementById('progress');
    const steps = document.querySelectorAll('.form-step');
    let currentStep = 0;

    const updateProgressBar = () => {
        progressBar.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;
    };

    const showStep = (index) => {
        steps.forEach((step, i) => {
            step.classList.toggle('form-step-active', i === index);
        });
        updateProgressBar();
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    };

    const openForm = () => {
        modal.style.display = 'block';
        showStep(currentStep);
    };

    const closeForm = () => {
        modal.style.display = 'none';
    };

    // Close the modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target === modal) {
            closeForm();
        }
    };

    // Expose functions to the global scope
    window.openForm = openForm;
    window.closeForm = closeForm;
    window.nextStep = nextStep;
    window.prevStep = prevStep;
});

