let menu = document.querySelector('#menu-btn');
let ul = document.querySelector('ul');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    ul.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    ul.classList.remove('active');

}