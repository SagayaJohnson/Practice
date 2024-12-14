const containerI =document.querySelector(".container")
const careers =["Mohan","Gay","ATM","ATM means Any Time matter"];


let careerIndex =0

let characterIndex = 0;

updateText()

function updateText(){
    characterIndex++;

containerI.innerHTML=`<h2>I am ${careers[careerIndex].slice(0,1) === "I" ? "am" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h2>`
;

if(characterIndex === careers[careerIndex].length){
careerIndex++;
characterIndex=0;
}
if(careerIndex === careers.length){ 
    careerIndex= 0;
}
setTimeout(updateText,500)
}


