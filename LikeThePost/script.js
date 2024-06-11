let con = document.querySelector("#container");
let love = document.querySelector("i");


con.addEventListener("dblclick",()=>{
    love.style.cssText = "color: #FF3040; transform:translate(-50%,-50%) scale(1); opacity: 0.8";
    setTimeout(()=>{
        love.style.transform = "translate(50%,50%) scale(0)";
    },2000);
})
