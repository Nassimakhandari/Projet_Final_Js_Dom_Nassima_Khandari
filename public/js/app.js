// ! Modal
let modal = document.getElementById("modal")
let btn = document.querySelector(".my-btn")
let loginBtn = document.getElementById("login-btn")
btn.addEventListener("click", () => {
  modal.style.display = "flex"
})
loginBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

// ^ Navbar
// let navigateur = document.querySelector("navigateur")
// let navBar = document.querySelector("navbar")

// navigateur.addEventListener("click", () => {
//   navigateur.classList.toggle("active")
//   navBar.classList.toggle("active")
// })
// document.querySelectorAll("links").forEach(n=> n.addEventListener)("click", () => {
//  navigateur.classList.remove("active")
// })



// ! watch video

// let nextBtns = document.querySelectorAll(".next")
// let previousBtns = document.querySelectorAll(".previous")
// let containers = document.querySelectorAll(".carousel-container-watch")
// let openbtn = document.getElementById("open")
// let carousel8 = document.getElementById("carousel8")
// openbtn.addEventListener("click", () => {
//   carousel8.style.display="block"
// })

// //* sliding function
// let currentIndex3 = 0
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
//             currentIndex3 = index
//         }
//     });


// }

// //* btn dyal next
// nextBtns.forEach(next => {
//     next.addEventListener("click", (event) => { slideImage(currentIndex3 + 1, event.target) })
// });

// //* btn dyal previous
// previousBtns.forEach(previous => {
//     previous.addEventListener("click", (event) => { slideImage(currentIndex3 - 1, event.target) })
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

let navLinks = document.querySelectorAll('.nav-link')
let tabPanes = document.querySelectorAll('.tab-pane')
navLinks.forEach((link, index) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()



    navLinks.forEach(nav => nav.classList.remove('active'))
    tabPanes.forEach(pane => pane.classList.remove('show', 'active', 'fade'))


    link.classList.add('active')

    tabPanes[index].classList.add('show', 'active', 'fade')
  })
})



// ! carousel section menu
let carousel = document.querySelector('.carousel3')
let slides = document.querySelectorAll('.slide')

let currentIndex2 = 0
let total = slides.length
let slideInterval = 3000

function start(index) {
  if (index >= total) {
    currentIndex2 = 0
  } else if (index < 0) {
    currentIndex = total - 1
  } else {
    currentIndex2 = index
  }

  carousel.style.transform = `translateX(-${100 * currentIndex2}%)`
}

function AutoSlide() {
  setInterval(() => {
    start(currentIndex2 + 1)
  }, slideInterval)
}
start(currentIndex2)
AutoSlide()



// ^ Carousel Events
let galleryInner = document.querySelector('.gallery-inner')
let galleryItems = document.querySelectorAll('.gallery-item')
let total2 = galleryItems.length
let currentIndex = 0
let intervalTime = 3000

function slide3() {
  currentIndex = (currentIndex + 1) % total2
  Gallery()
}

function Gallery() {
  let offset = -currentIndex * 100
  galleryInner.style.transform = `translateX(${offset}%)`
}

setInterval(slide3, intervalTime)

Gallery()


// ~ Carousel Gallery
let carousel5 = document.querySelector('.carousel4')
let carouselInner = document.querySelector('.carousel-inner2')
let carouselDots = document.querySelector('.carousel-dots')

let slideIndex = 0
let slides2 = carouselInner.children
let Time = 4000
let autoSlideInterval

for (let i = 0; i < slides2.length; i++) {

  let dot = document.createElement('button')

  dot.setAttribute('data-slide-index', i)

  carouselDots.appendChild(dot)
}

let dots = carouselDots.querySelectorAll('button')

function show(n) {

  slideIndex = (n + slides2.length) % slides2.length

  carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`

  dots.forEach(dot => dot.classList.remove('active'))

  dots[slideIndex].classList.add('active')
}

function startAutoSlide() {

  autoSlideInterval = setInterval(() => {

    show(slideIndex + 1)

  }, intervalTime)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval)
}

dots.forEach(dot => {

  dot.addEventListener('click', () => {

    stopAutoSlide()

    show(parseInt(dot.dataset.slideIndex))

    startAutoSlide()
  })
})

show(slideIndex)
startAutoSlide()