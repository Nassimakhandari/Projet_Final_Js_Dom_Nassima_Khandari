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

// let nextBtns = document.querySelectorAll(".next")
// let previousBtns = document.querySelectorAll(".previous")
// let containers = document.querySelectorAll(".carousel-container")



// //* sliding function
// let currentIndex = 0
// const slideImage = (index, myBtn) => {

//     let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")

//     containers.forEach(container => {
//         if (container.id == carouselBtnAttribute) {

//             //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna  
//             let slides = container.querySelectorAll(".slide")
//             let camera = container.querySelector(".carousel")
//             let slideWidth = slides[0].clientWidth
//             let indicators = container.querySelectorAll('.indicator')





//             //* clikit 3la previous  o ana  aslan f awel image  khasni nmchi  l image lakhra
//             if (index < 0) {
//                 index = slides.length - 1
//             } else if (index >= slides.length) {
//                 //* clikit 3la next o ana  aslan f akhir image khasni nrje3  l image lewla
//                 index = 0
//             }

//             indicators.forEach(indicator => {
//                 indicator.classList.remove('activeIndicator')
//             });
//             indicators[index].classList.add("activeIndicator")


//             //* hna bach n7arek l camera dyal lcarousel
//             camera.style.transform = `translateX(-${slideWidth * index}px)`
//             currentIndex = index
//         }
//     });


// }

// //* btn dyal next
// nextBtns.forEach(next => {
//     next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
// });

// //* btn dyal previous
// previousBtns.forEach(previous => {
//     previous.addEventListener("click", (event) => { slideImage(currentIndex - 1, event.target) })
// });


// //* auto slide 
// containers.forEach(container => {
//     //* check wach  l element 3ando attribute auto slide   
//     if (container.getAttribute("autoslide")) {
//         let nextBtn = container.querySelector(".next")

//         setInterval(() => {
//             //* method  kanwarek  biha  3la  btn 
//             nextBtn.click()
//         }, 3000);
//     }
// });

// //* indicators 

// containers.forEach(container => {
//     //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna  
//     let slides = container.querySelectorAll(".slide")
//     let indicatorsGrp = document.createElement("div")
//     indicatorsGrp.classList.add("indicators-grp")
//     container.appendChild(indicatorsGrp)

//     slides.forEach(slide => {
//         let indicator = document.createElement("div")
//         indicator.classList.add("indicator")
//         indicatorsGrp.appendChild(indicator)
//     });
//     indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
// });





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
