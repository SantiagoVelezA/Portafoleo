let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offset - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('activate');
                document.querySelector('header nav a [href*=' + id + ']').classList.add(activate)
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

function sendwhatsapp(){
    var phonenumber = "3023721517";

    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var number = document.querySelector('.number').value;
    var subject = document.querySelector('.subject').value;
    var coments = document.querySelector('.coments').value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"Name: * " + name + "%0a" 
    +"email: * " + email + "%0a" 
    +"number: * " + number + "%0a" 
    +"subject: * " + subject + "%0a" 
    +"coments: * " + coments + "%0a"

    window.open(url, '_black').focus();

}