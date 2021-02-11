const toggleBtn = document.getElementById('navbar-toggler');
const navDiv = document.querySelector('.navbar__collapse');


toggleBtn.addEventListener('click', function() {
    navDiv.classList.toggle('showNav');
    if (toggleBtn.firstElementChild.className == 'fas fa-bars fa-fw') {
        toggleBtn.firstElementChild.className = 'fas fa-times fa-fw';
        document.body.style.overflow = 'hidden';
    } else {
        toggleBtn.firstElementChild.className = 'fas fa-bars fa-fw';
        document.body.style.overflow = 'visible';
    }
})

const links = document.querySelectorAll('.__link');
links.forEach(link => {
    link.addEventListener('click', () => {
        document.body.style.overflow = 'visible';
        navDiv.classList.remove('showNav');
        toggleBtn.firstElementChild.className = 'fas fa-bars fa-fw';
    })
})


// resize animation stopper
let resizeTimer;
window.addEventListener('resize', function() {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
})



// reviews
const prevBtn = document.querySelector('.button__reviews-prev');
const nextBtn = document.querySelector('.button__reviews-next');
let idCount = 0;
const reviewSlide = document.querySelectorAll('.reviews__item');

function showCurrentSlide(id) {
    hideAllSlides();
    reviewSlide.forEach((item, ids) => {
        if (id == ids) {
            item.classList.add('activeSlide')
        }
    })
}

showCurrentSlide(idCount);

// hide all Slides
function hideAllSlides() {
    reviewSlide.forEach(item => item.classList.remove('activeSlide'));
}

prevBtn.addEventListener('click', function() {
    idCount--;
    if (idCount < 0) {
        idCount = reviewSlide.length - 1;
    }
    showCurrentSlide(idCount);
});

nextBtn.addEventListener('click', function() {
    idCount++;
    if (idCount == reviewSlide.length) {
        idCount = 0;
    }
    showCurrentSlide(idCount);
})