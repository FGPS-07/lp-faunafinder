const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click ',toggleMenu);

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('navegacao');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);
