// ==========================
// Sticky Header
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.style.padding = "18px 7%";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
    } else {
        header.style.padding = "28px 7%";
        header.style.boxShadow = "none";
    }
});


// ==========================
// Fade In on Scroll
// ==========================

const revealElements = document.querySelectorAll(
    ".about, .portfolio, .services, .contact, .card, .service-grid div"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ==========================
// Hero Animation
// ==========================

window.addEventListener("load", () => {

    const heroTitle = document.querySelector(".hero h1");
    const heroText = document.querySelector(".hero p");
    const heroBtn = document.querySelector(".btn");

    [heroTitle, heroText, heroBtn].forEach((el, i) => {

        setTimeout(() => {

            el.style.opacity = 1;
            el.style.transform = "translateY(0)";

        }, i * 250);

    });

});

// ==========================
// Smooth Anchor Scrolling
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ==========================
// Back To Top Button
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#222;
color:#fff;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==========================
// Scroll Progress Bar
// ==========================

const progress = document.createElement("div");

progress.id = "progress";

document.body.appendChild(progress);

progress.style.cssText=`

position:fixed;
top:0;
left:0;
height:4px;
background:#9b7b4b;
z-index:1000;
width:0%;

`;

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/total)*100;

progress.style.width=percent+"%";

});
fetch("https://formspree.io/f/xxxxx", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: formData
});

    
// ==========================
// Simple Cursor Hover Effect
// ==========================

document.querySelectorAll("a, button, .card").forEach(item=>{

item.addEventListener("mouseenter",()=>{

document.body.style.cursor="pointer";

});

item.addEventListener("mouseleave",()=>{

document.body.style.cursor="default";

});

});