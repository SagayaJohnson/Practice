const pictureEl = document.querySelector(".Picture")
const btnEl = document.querySelector(".btn")
 
btnEl.addEventListener("click",() =>{
     imageNum = 80000000;
     addNewImage()
});
function addNewImage() {
    for (let index = 0; index< imageNum; index++){
       

const newImaEl = document.createElement("img");
newImaEl.src =`https://picsum.photos/200/?random=${Math.floor(Math.random()*2000)}`;
pictureEl.appendChild(newImaEl);
}
}