//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

let btn = document.getElementById('btn');
btn.addEventListener('click',countVocals);
let result = document.getElementById('result')

function countVocals (){

let text = document.getElementById('text').value
let resultado = []
let vocals=['a','e','i','o','u']

vocals.forEach(vocal=>{
resultado.push(`Hay ${text.split('').filter(letra => letra == vocal).length} ${vocal}`)
})

result.innerHTML= resultado.join(',')
}
