//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
let btn = document.getElementById('btn');
btn.addEventListener('click',findPrime);
console.log(btn)
function findPrime(){ 
    let numero = document.getElementById('number').value;
    let result = document.getElementById('result');
    if( numero % 2 == 0){
        result.innerHTML=`El numero : ${numero} no es primo`
    };
    if (numero % 2  != 0 ){
        result.innerHTML= `El numero : ${numero} es primo`
    };
    
}
