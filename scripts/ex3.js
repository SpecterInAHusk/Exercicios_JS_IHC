function avaliarNota() {
    var nota = parseInt(document.getElementById("nota").value);

	var resultado = document.getElementById("resultado");

    if (nota < 6) {
		resultado.innerHTML = "Reprovado!";
        
    } else if (nota >= 6 && nota < 8){
		resultado.innerHTML = "Aprovado!";
        
    } else if (nota >= 8) {
		resultado.innerHTML = "Aprovado com louvor!";

    }
}