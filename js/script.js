
// Scroll animation
const faders=document.querySelectorAll('.fade');
const obs=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});
});
faders.forEach(f=>obs.observe(f));

// Certificate modal
const modal=document.getElementById("certModal");
const frame=document.getElementById("certFrame");
document.querySelectorAll('.certBtn').forEach(btn=>{
 btn.onclick=()=>{
  frame.src='assets/images/certificates/'+btn.dataset.cert;
  modal.style.display='block';
 }
});
document.querySelector('.close').onclick=()=>modal.style.display='none';
