//Escribe un programa que pida una frase y escriba las vocales que aparecen
let btn = document.getElementById('btn');
btn.addEventListener('click',findA);

function findA () {
    let text = document.getElementById("text").value;
    let count = [];

	for(let i = 0; i < text.length; i++) {
		if (text[i] === "a") count.push("a");
		if (text[i] === "e") count.push("e");
		if (text[i] === "i") count.push("i");
		if (text[i] === "o") count.push("o");
		if (text[i] === "u") count.push("u");
	}
	let totalVocals = document.getElementById("result").innerHTML = count;
    result.innerHTML = `las vocales que aparecen son : ${totalVocals}`
}

