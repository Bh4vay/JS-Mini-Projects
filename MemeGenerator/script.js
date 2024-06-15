const btn = document.querySelector(".generate-meme-btn");
const memeImg = document.querySelector(".meme-img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");
const memeLink = document.querySelector(".meme-link");

function renderMeme(data){
    memeTitle.innerText = data?.title;
    memeImg.src = data?.url;
    memeLink.href = data?.postLink;
    memeLink.classList.add("active");
    memeAuthor.innerText = `Author - ${data?.author}`;
}

async function generateMeme(){
    try{
        const response = await fetch("https://meme-api.com/gimme/wholesomememes");
        const data = await response.json();
        console.log(data);
        if(!response.ok){
            throw new Error("Error");
        }
        renderMeme(data);
    }
    catch(err){
        console.log("Error!");
    }
}


btn.addEventListener("click",generateMeme);