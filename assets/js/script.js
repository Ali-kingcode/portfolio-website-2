// navigation mobile 
let navMenu = document.querySelector('.nav-list');
let navToggle = document.querySelector('.toggle-menu');
let navClose = document.querySelector('.close-menu');
let navLinks = document.querySelectorAll('.nav-link');

navToggle.onclick = () => {
    navMenu.classList.add('active-header');
}

navClose.onclick = () => {
  navMenu.classList.remove('active-header');
};

navLinks.forEach((item) => {
    item.onclick = () => {
        navMenu.classList.remove('active-header');
    }
})