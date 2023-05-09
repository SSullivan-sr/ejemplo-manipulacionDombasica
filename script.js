const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', btnOnClick);
 
function btnOnClick (event){
    event.preventDefault();
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    const total = num1 + num2;
    pResult.innerText = "total: " + total;
} 

