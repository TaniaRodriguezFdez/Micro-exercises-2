//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

let btn = document.getElementById('btn');

btn.addEventListener('click',findA);
function findA (){
    let text = document.getElementById("text").value;
    let cantidadA = [];
	for(let letrasA = 0; letrasA < text.length; letrasA++) {
		if (text[letrasA] === "a") cantidadA.push(letrasA);
	}
	let countA = document.getElementById("result").innerHTML = cantidadA.length;
    result.innerHTML=`la cantidad de letras 'a' que hay es : ${countA}`
}
