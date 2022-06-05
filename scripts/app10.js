//Escribir un programa que escriba en pantalla los divisores de un número dado

let btn = document.getElementById('btn');
let result = document.getElementById('result');
btn.addEventListener('click',findDivisors);    

function findDivisors (){
let n = []
let numeroInput = document.getElementById('number').value; 
for(let divisor = numeroInput; divisor >= 0; divisor--){
    if(numeroInput % divisor === 0){
        console.log(divisor);
        n.push(divisor);
    }
    result.innerHTML=`los divisores de ${numeroInput} son ${n}`
}
}
