const colorBtn=document.querySelector('.colorBtn');
const bcg=document.querySelector('body');
const colors = ['blue','yellow','red','green','pink','purple','#3b5998'];
colorBtn.addEventListener('click',changecolor);
function changecolor(){
    let random=Math.floor(Math.random()*colors.length)
    bcg.style.backgroundColor=colors[random];
}
