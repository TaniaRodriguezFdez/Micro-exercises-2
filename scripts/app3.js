//Escribe un programa que pida un número y diga si es divisible por 2

let btn = document.getElementById('btn');
let result = document.getElementById('result');
btn.addEventListener('click',findDivisor);

function findDivisor(){
    let number = document.getElementById("number").value;
    if(number % 2 == 0){
        result.innerHTML=`el numero ${number} es divisible por dos`;
       };
    if(number % 2 != 0){
        result.innerHTML=`el numero ${number} no es divisible por dos`;
       }
}
