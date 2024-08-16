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