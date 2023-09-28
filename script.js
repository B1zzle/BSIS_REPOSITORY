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

const headerText = document.querySelector('header h4');

headerText.addEventListener('mouseenter', () => {
  headerText.classList.add('rainbow-effect');
});

headerText.addEventListener('mouseleave', () => {
  headerText.classList.remove('rainbow-effect');
});