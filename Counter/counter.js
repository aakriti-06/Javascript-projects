let counter=document.querySelector('.counter');
let lowerCountbtn=document.querySelector('#lowerCountbtn');
let addCountbtn=document.querySelector('#addCountbtn');
let count=0;
addCountbtn.addEventListener('click',incrementCounter);
lowerCountbtn.addEventListener('click',decrementCounter);
function incrementCounter(){
    count++;
    counter.innerHTML=count;
    if(counter.innerHTML>'0'){
        counter.style.color='#4caf50';
    }
    else if(counter.innerHTML==='0'){
        counter.style.color='white';
    }

}
function decrementCounter(){
    count--;
    counter.innerHTML=count;
    if(counter.innerHTML<'0'){
        counter.style.color='red';
    }
    else if(counter.innerHTML==='0'){
        counter.style.color='white';
    }
}
