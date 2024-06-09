var main = document.querySelector(".main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove",(dets)=>{
    console.log("ji");
    crsr.style.top = dets.y + "px";
    crsr.style.left = dets.x + "px";
})