function scrollHeader() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll',()=>{
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else{
            header.classList.remove('scrolled');
        }
    });
}
function menuHamburguer() {
    const btnMenu = document.querySelector('.btn-menu');
    const navItems = document.querySelector('.nav-items');
    const btnClose = document.querySelector('.btn-close');

    btnMenu.addEventListener('click', ()=>{
        navItems.classList.toggle('active');
    });
    btnClose.addEventListener('click', ()=>{
        navItems.classList.remove('active');
    });
}


scrollHeader();
menuHamburguer();