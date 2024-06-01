let dec = document.querySelector('#dec');
let inc = document.querySelector('#inc');
let text = document.querySelector('#text');

const decrement = () =>{
    let value = parseInt(text.innerText);
    value = value-1;
    text.innerText = value;
}
const increment = () =>{
    let value = parseInt(text.innerText);
    value = value+1;
    text.innerText = value;
}

dec.addEventListener('click',decrement);
inc.addEventListener('click',increment);