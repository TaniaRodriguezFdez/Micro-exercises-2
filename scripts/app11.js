//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

let result = document.getElementById('result');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
btn.addEventListener('click',findDivisor1);    
btn2.addEventListener('click',findDivisor2); 
let nDivisors1 = [];
let nDivisors2 = [];


 function findDivisor1 (){
    nDivisors1 = []; // inicializo prar dejarlo vacio cada vez que pulso el boton
    let n1 = document.getElementById('number').value; // leemos el contenido de la caja result
    //for(let divisor = n1; divisor >= 0; divisor--){
    for(let divisor = 1; divisor <= n1; divisor++){
        if(n1 % divisor === 0){
           
            nDivisors1.push(divisor);
            
        }
    result.innerHTML=`los divisores de ${n1} son ${nDivisors1}`   
    }
    
    }
    
    function findDivisor2 (){
        nDivisors2 = [];
        let n = []
        let n2 = document.getElementById('number2').value; 
        for(let divisor = n2; divisor >= 0; divisor--){
            if(n2 % divisor === 0){
                nDivisors2.push(divisor);
            }
         result2.innerHTML=`los divisores de ${n2} son ${nDivisors2}`
        }
        console.log(n)

        // =======================================================
        // desopues de calcularlos los pintamos
        let divisoresComunes = [];

        nDivisors1.forEach(divisor1 => {
            nDivisors2.forEach(divisor2 => {
                    if (divisor1 == divisor2) {
                        divisoresComunes.push(divisor1)    
                    }
                    
                });
            });     
            
            result3.innerHTML=`los divisores comunes son ${divisoresComunes}`

        }
      