function maiorNumero() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);

	var resultado = document.getElementById("resultado");

	if (isNaN(num1) || isNaN(num2)) {
		resultado.innerHTML = "Insira números válidos!";
	} else if (num1 === num2) {
        resultado.innerHTML = "Os números são iguais"
    }
    else {
		var maxNum = Math.max(num1, num2);
		resultado.innerHTML = "O maior número é: " + maxNum;
	}
}
