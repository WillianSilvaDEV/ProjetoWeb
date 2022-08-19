var total = document.getElementById('valorTotal')
document
  .getElementById('mais')
  .addEventListener('click', calculaValorTotalCompra)
document
  .getElementById('menos')
  .addEventListener('click', calculaValorTotalCompra)
var valorFesta = document.getElementById('preco')

numero = 0

function less() {
  numero--
  setValue(numero)
}

function more() {
  numero++
  setValue(numero)
}

function setValue(value) {
  document.getElementById('num').value = value
}
setValue(numero)
function calculaValorTotalCompra() {
  var valorTotalCompra = valorFesta.innerHTML.replaceAll('R$', ' ') * numero
  total.innerHTML =
    '<span style="color: rgb(0, 110, 255)">Total </span>' +
    '<strong>R$ </strong>' +
    valorTotalCompra.toFixed(2)
}

// Segunda Festa //

var total2 = document.getElementById('valorTotal2')
document
  .getElementById('mais2')
  .addEventListener('click', calculaValorTotalCompra2)
document
  .getElementById('menos2')
  .addEventListener('click', calculaValorTotalCompra2)
var valorFesta2 = document.getElementById('preco2')

numero2 = 0

function less2() {
  numero2--
  setValue2(numero2)
}

function more2() {
  numero2++
  setValue2(numero2)
}

function setValue2(value) {
  document.getElementById('num2').value = value
}
setValue2(numero2)

function calculaValorTotalCompra2() {
  var valorTotalCompra2 = valorFesta2.innerHTML.replaceAll('R$', ' ') * numero2
  total2.innerHTML =
    '<span style="color: rgb(0, 110, 255)">Total </span>' +
    '<strong>R$ </strong>' +
    valorTotalCompra2.toFixed(2)
}
