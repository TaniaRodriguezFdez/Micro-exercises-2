//Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.

let btn = document.getElementById('btn');
let resultOne = document.getElementById('result-one');
btn.addEventListener('click',findHighestNumber);

function findHighestNumber (){
    let numOne = parseFloat(document.getElementById("num1").value);
    let numTwo = parseFloat(document.getElementById("num2").value);
    if (numOne>numTwo){
        result.innerHTML=`El mayor de los dos es : ${numOne}`;
        return;    
    }
    result.innerHTML=`El mayor de los dos es : ${numTwo}`   
}