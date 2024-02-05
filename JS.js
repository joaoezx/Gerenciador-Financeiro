//var despesas = document.getElementById("Despesas2")
//var valor = document.getElementById("Valor2")

function AdicionarDespesa(){
    var despesas = document.getElementById("Despesas2").value
    document.getElementById("despesaLista").innerHTML += "<li>" + despesas + "</li>"

}

function AdicionarValor() {
    
    var valor = parseFloat(document.getElementById("Valor2").value)
    document.getElementById("valorLista").innerHTML += "<li>" + "R$" + valor + "</li>"
}

