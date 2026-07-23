// ===============================
// SHUBHSHILP V2.0
// Premium Website Script
// ===============================

// Smooth scrolling
// ==========================
// SHUBHSHILP V3 SCRIPT
// ==========================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Sticky header shadow

const header = document.querySelector(".header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 60){
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
    }else{
        header.style.boxShadow = "none";
    }

});

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([
                {
                    opacity:0,
                    transform:"translateY(40px)"
                },
                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:700,
                easing:"ease-out",
                fill:"forwards"

            });

            observer.unobserve(entry.target);

        }

    });

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";

    observer.observe(section);

});

// Floating WhatsApp Button

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/919084887226";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

Object.assign(whatsapp.style,{

position:"fixed",

bottom:"25px",

right:"25px",

width:"60px",

height:"60px",

background:"#25D366",

borderRadius:"50%",

display:"flex",

justifyContent:"center",

alignItems:"center",

fontSize:"30px",

color:"#fff",

textDecoration:"none",

boxShadow:"0 10px 30px rgba(0,0,0,.25)",

zIndex:"9999"

});

document.body.appendChild(whatsapp);

// Back To Top

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

Object.assign(topBtn.style,{

position:"fixed",

bottom:"100px",

right:"28px",

width:"48px",

height:"48px",

border:"none",

borderRadius:"50%",

background:"#b8860b",

color:"#fff",

fontSize:"22px",

cursor:"pointer",

display:"none",

zIndex:"9998"

});

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>300?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

console.log("Shubhshilp V3 Loaded");
