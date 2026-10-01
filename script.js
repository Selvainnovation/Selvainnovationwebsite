document.documentElement.classList.add("loading");

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hide");
    document.documentElement.classList.remove("loading");
    setTimeout(() => loader.remove(), 750);
  }, 1850);
});

const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const subject=encodeURIComponent("Selva Innovation Project Enquiry");
  const body=encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nProject details:\n${data.get("message")}`);
  window.location.href=`mailto:hello@selvainnovation.com?subject=${subject}&body=${body}`;
  document.getElementById("formMsg").textContent="Opening your email app...";
});
