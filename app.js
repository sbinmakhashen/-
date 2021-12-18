// variables
const stickyHeader = document.getElementById('headerBottom');
const navBtn = document.getElementById("navToggler");
const navbar = document.getElementById('navbar');
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
    navbar.style.display = "block"
}