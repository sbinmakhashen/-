// variables
const stickyHeader = document.getElementById('headerBottom');
const navBtn = document.getElementById("navToggler");
const navbar = document.getElementById('navbar');
const ul = document.querySelector('#navbar ul');
// functions
window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 500) {
        stickyHeader.classList.add("active");
    }else {
        stickyHeader.classList.remove("active");
    }
});
navBtn.addEventListener('click', (e) => toggleBtn(e));

function toggleBtn(e) {
    const isNavToggled = navbar.style.display === "none";
    if(isNavToggled) {
        navbar.style.display = "block"
        ul.classList.add("show");
    }else {
        navbar.style.display = "none"
    }
}