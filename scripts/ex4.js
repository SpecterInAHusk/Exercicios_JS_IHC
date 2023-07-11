function calcularMedia() {
	var input = document.getElementById("vetor").value;
	var numeros = input.split(",").map(Number);

	var soma = numeros.reduce(function (a, b) {
		return a + b;
    }, 0);

	var media = soma / numeros.length;
	document.getElementById("resultado").innerHTML = "Média: " + media;
}
