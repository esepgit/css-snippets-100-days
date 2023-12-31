let isActive = true;
let menuIsActive = true;

function handleClickSearch() {
     const input = document.getElementById('input');

     if (isActive) {
        input.classList.add('active');
        input.classList.remove('inactive');
        isActive = false;
     } else {
        input.classList.add('inactive');
        input.classList.remove('active');
        isActive = true;
     }
}

function handleClickMenu() {
    const menu = document.getElementById('menu');
    const card = document.getElementById('card')

     if (menuIsActive) {
        menu.classList.add('menu-active');
        menu.classList.remove('menu-inactive');
        card.classList.add('card-active');
        card.classList.remove('card-inactive');
        menuIsActive = false;
     } else {
        menu.classList.add('menu-inactive');
        menu.classList.remove('menu-active');
        card.classList.add('card-inactive');
        card.classList.remove('card-active');
        menuIsActive = true;
     }
}

