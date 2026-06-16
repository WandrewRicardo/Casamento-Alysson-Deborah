const btnMenu = document.querySelector('.btn-menu');
const navItems = document.querySelector('.nav-items');

btnMenu.addEventListener('click', () => {
    navItems.classList.toggle('active')
});