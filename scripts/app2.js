//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let inputn1 = document.getElementById("num-one");
let inputn2 = document.getElementById("num-two");
let inputn3 = document.getElementById("num-three");
const btn = document.getElementById('btn'); 
const result = document.getElementById('result');

btn.addEventListener('click',() => {
    
    let n1User = inputn1.value;
    let n2User = inputn2.value;
    let n3User = inputn3.value;
    let resultado = findHightNumber(n1User,n2User,n3User);
    result.innerHTML = `el mayor de los tres es : ${resultado}`
});
function findHightNumber (n1,n2,n3){
    
   if (n1 > n2 & n1 > n3) {
        return n1;
    }
   if (n2 > n3) {
        return n2;
    }
   return n3;
}
 

