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

// ! watch video




// & Menu

let navLinks = document.querySelectorAll('.nav-link');
let tabPanes = document.querySelectorAll('.tab-pane');
navLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            
           
            navLinks.forEach(nav => nav.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('show', 'active','fade'));

            
            link.classList.add('active');

            tabPanes[index].classList.add('show', 'active','fade');
        });
    });



// ! carousel section menu
let carousel = document.querySelector('.carousel3');
let slides = document.querySelectorAll('.slide');

let currentIndex2 = 0;
let total = slides.length;
let slideInterval = 3000; 

function start(index) {
    if (index >= total) {
        currentIndex2 = 0;
    } else if (index < 0) {
        currentIndex = total - 1;
    } else {
        currentIndex2 = index;
    }

    carousel.style.transform = `translateX(-${100 * currentIndex2}%)`;
}

function AutoSlide() {
    setInterval(() => {
        start(currentIndex2 + 1);
    }, slideInterval);
}
start(currentIndex2);
AutoSlide();


// ^ Carousel Events
let galleryInner = document.querySelector('.gallery-inner');
let galleryItems = document.querySelectorAll('.gallery-item');
let totalItems = galleryItems.length;
let currentIndex = 0;
let intervalTime = 3000; 

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateGallery();
}

function updateGallery() {
    let offset = -currentIndex * 100; 
    galleryInner.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, intervalTime);

updateGallery();


