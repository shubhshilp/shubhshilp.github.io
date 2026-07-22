// ===== SHUBHSHILP PREMIUM SCRIPT =====

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

// Sticky header shadow
const header=document.querySelector('.header');
window.addEventListener('scroll',()=>{
  if(window.scrollY>50){
    header.style.boxShadow='0 8px 24px rgba(0,0,0,.18)';
  }else{
    header.style.boxShadow='none';
  }
});

// Fade-in sections
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.animate([
        {opacity:0,transform:'translateY(40px)'},
        {opacity:1,transform:'translateY(0)'}
      ],{
        duration:700,
        fill:'forwards',
        easing:'ease-out'
      });
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.15});

document.querySelectorAll('section').forEach(sec=>{
  sec.style.opacity=0;
  observer.observe(sec);
});

// Back to top button
const btn=document.createElement('button');
btn.innerHTML='↑';
btn.title='Back to top';
Object.assign(btn.style,{
  position:'fixed',
  bottom:'20px',
  right:'20px',
  width:'48px',
  height:'48px',
  border:'none',
  borderRadius:'50%',
  background:'#c8a24a',
  color:'#fff',
  fontSize:'22px',
  cursor:'pointer',
  display:'none',
  zIndex:'9999'
});
document.body.appendChild(btn);

window.addEventListener('scroll',()=>{
  btn.style.display=window.scrollY>300?'block':'none';
});

btn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

console.log("Welcome to Shubhshilp Premium");
