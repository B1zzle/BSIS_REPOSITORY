/* Splash Screen */
let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add("active")
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(()=>{
            intro.style.top ='-100vh';
        }, 2300)
    })
})

/* Rainbow Effect on Logo */
const logoHome = document.querySelector('.logo-home');

logoHome.addEventListener('mouseenter', () => {
    logoHome.classList.add('rainbow-effect');
});

logoHome.addEventListener('mouseleave', () => {
    logoHome.classList.remove('rainbow-effect');
});

/* Button Animation Fix */
window.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('button'); 
   
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add("active");
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
            button.style.visibility = 'visible'; 
        }, 2500);
    });
});

/* Hamburger Menu */

const Nav = document.querySelector('.nav-bar')
const openMenu = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.exitMenu')

openMenu.addEventListener('click', open)
closeMenu.addEventListener('click', close)

function open(){
    Nav.style.display = 'flex';
    Nav.style.right = '0';
}

function close() {
    Nav.style.width = '0';
}