function menuHamburguer() {
    const btnMenu = document.querySelector('.btn-menu');
    const navItems = document.querySelector('.nav-items');
    const btnClose = document.querySelector('.btn-close');

    btnMenu.addEventListener('click', () => {
        navItems.classList.toggle('active')
    });

     btnClose.addEventListener('click', ()=>{
        navItems.classList.remove('active');
        btnClose.classList.remove('active');
    });
}
function reservaPresenntes () {
    const btnReservar = document.querySelector('.btn-reservar')

    btnReservar.addEventListener('click', async (event) => {
        event.preventDefault();
    });
}

reservaPresenntes();
menuHamburguer();