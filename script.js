const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let char = 0;
const updateCounter = ()=>{
    userChar = charVal.value.length;
    
    totalCount.innerHTML = userChar;
    remainingCount.innerHTML = 150 - userChar;
};
charVal.addEventListener('keyup', ()=> updateCounter());

// button copy text code

const copytext = ()=>{
    charVal.select()
    charVal.setSelectionRange(0,999); // for mobile
    navigator.clipboard.writeText(charVal.value); // important api for copt to clip board
    
}





