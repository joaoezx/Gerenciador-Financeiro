function AdicionarDespesa() {
    var despesas = document.getElementById("Despesas2").value
    document.getElementById("despesaLista").innerHTML += "<li>" + despesas + "</li>"

}

var valores = []

export function AdicionarValor() {

   var valor = parseFloat(document.getElementById("Valor2").value)
    valores.push(valor)
    document.getElementById("valorLista").innerHTML += "<li>" + "R$" + valor + "</li>"
}

function conta() {
    let soma = 0;
    for (var a = 0; a < valores.length; a++) {
        soma += valores[a]
    }

    document.getElementById("resultado").innerHTML = `Total de Despesas: R$${soma.toFixed(2)}`
}