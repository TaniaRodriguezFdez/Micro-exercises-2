//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let btn = document.getElementById('btn');
btn.addEventListener('click',findDivisor);
console.log(btn)
function findDivisor(){ 
    let numero = document.getElementById('number').value;
    let result = document.getElementById('result');
    let divisor = []
    if( numero % 2 == 0){
        result.innerHTML=`${numero}es divisible por 2`
        divisor.push(numero)
    };
    if(numero % 3  === 0 ){
        result.innerHTML=`${numero}es divisible por 3`
    };
    if(numero % 5  === 0 ){
        result.innerHTML=`${numero}es divisible por 5`
    };
    if(numero % 7  === 0 ){
        result.innerHTML=`${numero}es divisible por 7`
    };
}
//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)