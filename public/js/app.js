// ! Modal
let modal = document.getElementById("modal");
let btn = document.querySelector(".my-btn");
let loginBtn= document.getElementById("login-btn")
btn.addEventListener("click", () => {
    modal.style.display = "flex";
});
loginBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// ! carousel 1 -- watch video
let nextBtns = document.querySelectorAll(".next");
let prevBtns = document.querySelectorAll(".prev");
let containers = document.querySelectorAll(".carousel");

let currentIndex = 0;

const slideImage = (index, myBtn) => {
    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn");

    containers.forEach(container => {
        if (container.id === carouselBtnAttribute) {
            let slides = container.querySelectorAll(".slide");
            let camera = container.querySelector(".carousel");
            let slideWidth = slides[0].clientWidth;
            let indicators = container.querySelectorAll('.indicator');

            if (index < 0) {
                index = slides.length - 1; 
            } else if (index >= slides.length) {
                index = 0; 
            }

            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator');
            });
            indicators[index].classList.add("activeIndicator");

            camera.style.transform = `translateX(-${slideWidth * index}px)`;
            currentIndex = index;
        }
    });
};

nextBtns.forEach(next => {
    next.addEventListener("click", (event) => {
        let container = next.closest(".carousel");
        slideImage(currentIndex + 1, event.target);
    });
});

prevBtns.forEach(prev => {
    prev.addEventListener("click", (event) => {
        let container = prev.closest(".carousel");
        slideImage(currentIndex - 1, event.target);
    });
});

containers.forEach(container => {
    if (container.getAttribute("autoslide")) {
        let nextBtn = container.querySelector(".next");

        setInterval(() => {
            nextBtn.click(); 
        }, 3000); 
    }
});

containers.forEach(container => {
    let slides = container.querySelectorAll(".slide");
    let indicatorsGrp = document.createElement("div");
    indicatorsGrp.classList.add("indicators-grp");
    container.appendChild(indicatorsGrp);

    slides.forEach(() => {
        let indicator = document.createElement("div");
        indicator.classList.add("indicator");
        indicatorsGrp.appendChild(indicator);
    });

    indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator');
});

document.getElementById("watchVideo").addEventListener("click", () => {
    let carousel = document.getElementById("carousel1");
    carousel.style.display = "flex";
});
