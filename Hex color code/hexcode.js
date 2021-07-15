const hexNumbers=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn=document.querySelector('.hexBtn');
const bcg=document.querySelector('body');
const hex=document.querySelector('.hex');
hexBtn.addEventListener('click',getHex);
function getHex(){
    let hexcol='#';
    for(let i=0;i<6;i++){
        let random=Math.floor(Math.random()*hexNumbers.length);
        hexcol+=hexNumbers[random];
    }
    bcg.style.backgroundColor=hexcol;
    hex.innerHTML=hexcol;
}