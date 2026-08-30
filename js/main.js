
document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".nav-toggle"),nav=document.querySelector(".nav-links");
 if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("is-open");toggle.setAttribute("aria-expanded",open)})}
 const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("is-visible")}),{threshold:.08});
 document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
 const cookie=document.querySelector(".cookie"),accept=document.querySelector("[data-cookie-accept]");
 if(cookie&&accept){if(localStorage.getItem("jo-cookie-consent")==="accepted")cookie.hidden=true;accept.addEventListener("click",()=>{localStorage.setItem("jo-cookie-consent","accepted");cookie.hidden=true})}
 const form=document.querySelector("#engagement-form");
 if(form)form.addEventListener("submit",e=>{e.preventDefault();const status=document.querySelector("#form-status");status.textContent="Your enquiry form is ready to connect to the selected email/form-processing service.";status.hidden=false});
});
