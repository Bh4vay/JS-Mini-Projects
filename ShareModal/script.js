const modal = document.querySelector(".modal");
const btn = document.querySelector("#sharebtn");
const closeBtn = document.querySelector("#close");

btn.addEventListener("click",()=>{
    console.log("hii");
    modal.style.display = "block";
});

closeBtn.addEventListener("click",()=>{
    console.log("bye");
    modal.style.display = "none";
});

