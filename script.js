// ===============================
// SHUBHSHILP V2.0
// Premium Website Script
// ===============================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Sticky header shadow
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
    }else{
        header.style.boxShadow = "none";
    }
});

// Fade-in animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Floating WhatsApp Button
const whatsapp = document.createElement("a");

whatsapp.href="https://wa.me/919084887226";
whatsapp.innerHTML="💬";
whatsapp.target="_blank";

whatsapp.style.position="fixed";
whatsapp.style.bottom="25px";
whatsapp.style.right="25px";
whatsapp.style.width="60px";
whatsapp.style.height="60px";
whatsapp.style.background="#25D366";
whatsapp.style.color="white";
whatsapp.style.display="flex";
whatsapp.style.alignItems="center";
whatsapp.style.justifyContent="center";
whatsapp.style.borderRadius="50%";
whatsapp.style.fontSize="30px";
whatsapp.style.textDecoration="none";
whatsapp.style.boxShadow="0 8px 25px rgba(0,0,0,.25)";
whatsapp.style.zIndex="9999";

document.body.appendChild(whatsapp);

// Back-to-top button
const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.bottom="100px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#8b5e3c";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

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

console.log("Shubhshilp V2 Loaded Successfully");
