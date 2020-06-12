window.addEventListener('DOMContentLoaded', () => {

    const scrolledNav = document.querySelector('.navbar');
    const toggleBtn = document.querySelector("#toggle-btn");
    const sideDrawer = document.querySelector(".side-drawer");
    let isOpen = false;

    document.addEventListener('scroll', function () {
        if (scrollY > 300) {
            scrolledNav.classList.add('scrolled-navbar')
        } else {
            scrolledNav.classList.remove('scrolled-navbar')
        }
    });

    toggleBtn.addEventListener('click', function () {
        if (isOpen) {
            sideDrawer.style.transform = 'translateX(-100%)';
            toggleBtn.innerHTML = '<i class="fa fa-bars"></i>'
        } else {
            sideDrawer.style.display = 'block';
            sideDrawer.style.transform = 'translateX(0)'
            toggleBtn.innerHTML = '<i class="fa fa-times"></i>';
        }
        isOpen =! isOpen;
    })

})