const stickyHeader = document.querySelector('.header-bottom');

window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 500) {
        stickyHeader.classList.add("active");
    }else {
        stickyHeader.classList.remove("active");
    }
});