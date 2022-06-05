//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

let result1 = document.getElementById('divisors1');
let result2 = document.getElementById('divisors2');
let result3 = document.getElementById('divisorsCommon');
let btn = document.getElementById('btn');
btn.addEventListener('click',main); 


 function findDivisors (numero){
    let nDivisors = []; // inicializo prar dejarlo vacio cada vez que pulso el boton
    //for(let divisor = n1; divisor >= 0; divisor--){

    for(let divisor = 1; divisor <= numero; divisor++){
        if(numero % divisor === 0){
            nDivisors.push(divisor);        
        }   
    }
    return nDivisors
}

    // recibe 2 arrays y busca los elementos comunes
    function findCommon (divisores1, divisores2){

        let divisoresComunes = [];

        divisores1.forEach(divisor1 => {
            divisores2.forEach(divisor2 => {
                    if (divisor1 == divisor2) {
                        divisoresComunes.push(divisor1)    
                    }
                    
                });
            });     
            
            return divisoresComunes;
            
        }

function main(){
    
    let nDivisors1 = [];
    let nDivisors2 = [];

    //encontrar los divisores del primer numero
    let primero = document.getElementById('number1').value; // leemos el contenido de la caja result
    nDivisors1 = findDivisors(primero);
    result1.innerHTML=`los divisores de ${primero} son ${nDivisors1}`;
    
    //encontrar los divisores del segundo numero
    let segundo = document.getElementById('number2').value; // leemos el contenido de la caja result
    nDivisors2 = findDivisors(segundo);
    result2.innerHTML=`los divisores de ${segundo} son ${nDivisors2}`;

    //buscar los elementos comunes
    let comunes = findCommon ( nDivisors1, nDivisors2);
    result3.innerHTML=`los divisores comunes son ${comunes}`
}
