let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-rectangle-xmark');
    navbar.classList.toggle('active');
}

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id+ ']').classList.add('active');
            });
        };
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('fa-rectangle-xmark');
    navbar.classList.remove('active');
};


ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', { origin:'top' });
ScrollReveal().reveal('.home-img, services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin:'right' });



const typed=new Typed('.multiple-text',{
    strings: ["I'm a Web Developer.","I'm especially interested in the MERN Stack Development.","Welcome to my portfolio! 🙂"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay:1000,
    loop:true,
});


const btnClick=document.getElementById('btn7');
const dialog=document.getElementById('dialogBox');



const typed2=new Typed('.multiple-text2',{
    strings: ["About Me","You can know more about me here :"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay:1000,
    loop:true,
});
const typed3=new Typed('.multiple-text3',{
    strings: ["My Services","You can check the following services that I'm providing :"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay:1000,
    loop:true,
});
const typed4=new Typed('.multiple-text4',{
    strings: ["Latest Projects","You can check my latest projects here :"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay:1000,
    loop:true,
});
const typed5=new Typed('.multiple-text5',{
    strings: ["Contact Me","You can easily contact me by filling out this form :"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay:1000,
    loop:true,
});
const typed6=new Typed('.multiple-text6',{
    strings: ["Skills ▼","Checkout my skills here:"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay:1000,
    loop:true,
});

function resetIcons() {
    document.querySelectorAll('.navbar a').forEach(item => {
        item.innerHTML = item.dataset.defaultText;
    });
}

document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', () => {
        resetIcons();
        item.innerHTML = item.dataset.activeText;
    });
});



