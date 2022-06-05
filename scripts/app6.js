//Escribe un programa que pida una frase y escriba cuántas vocales hay en la frase.

let btn = document.getElementById('btn');
btn.addEventListener('click',findA);
function findA (){
    let text = document.getElementById("text").value;
    let count = [];
	for(let i = 0; i < text.length; i++) {
		if (text[i] === "a") count.push(i);
		if (text[i] === "e") count.push(i);
		if (text[i] === "i") count.push(i);
		if (text[i] === "o") count.push(i);
		if (text[i] === "u") count.push(i);

	}
	let numbOfvocals = document.getElementById("result").innerHTML = count.length;
    result.innerHTML = `el numero de vocales que aparecen es : ${numbOfvocals}`
}
