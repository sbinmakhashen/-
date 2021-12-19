// variables
const stickyHeader = document.getElementById('headerBottom');
const navBtn = document.getElementById("navToggler");
const navbar = document.getElementById('navbar');
const ul = document.querySelector('#navbar ul');
// Events
window.addEventListener('scroll', navBarOnScroll);
navBtn.addEventListener('click', toggleBtn);


// functions
function navBarOnScroll() {
    if(window.scrollY >= 500) {
        stickyHeader.classList.add("active");
    }else {
        stickyHeader.classList.remove("active");
    }
} 
function toggleBtn() {
    const isNavToggled = navbar.style.display === "block";
    if(isNavToggled) {
        navbar.style.display = "";
    }else {
        navbar.style.display = "block";
        ul.classList.add("show");
        document.addEventListener('click', (e) => !stickyHeader.contains(e.target) ? navbar.style.display = "" : null);
    }
}