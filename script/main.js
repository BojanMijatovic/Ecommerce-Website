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



// resize animation stopper

let resizeTimer;
window.addEventListener('resize', function() {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
})