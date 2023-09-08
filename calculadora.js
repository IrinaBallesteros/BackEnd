function mostrarResultado(resultado) {
    document.getElementById("resultado").value = resultado;
}

function suma() {
    let num1 = document.getElementById("campo1").value;
    let num2 = document.getElementById("campo2").value;
    var resultado = parseInt(num1) + parseInt(num2);
    mostrarResultado(resultado);
}

function resta() {
    let num1 = document.getElementById("campo1").value;
    let num2 = document.getElementById("campo2").value;
    var resultado = parseInt(num1) - parseInt(num2);
    mostrarResultado(resultado);
}

function multiplicacion() {
    let num1 = document.getElementById("campo1").value;
    let num2 = document.getElementById("campo2").value;
    var resultado = parseInt(num1) * parseInt(num2);
    mostrarResultado(resultado);
}

function division() {
    let num1 = document.getElementById("campo1").value;
    let num2 = document.getElementById("campo2").value;
    var resultado = parseInt(num1) / parseInt(num2);
    mostrarResultado(resultado);
}

function raiz() {
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.sqrt(numero));
}

function potencia() {
    let num1 = +document.getElementById("campo1").value;
    let num2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(num1, num2));
}

function absoluto() {
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.abs(numero));
}

function aleatorio() {
    let minimo = +document.getElementById("campo1").value;
    let maximo = +document.getElementById("campo2").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
}

function redondeo() {
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(resultado));
}

function techo() {
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(resultado));
}

function piso() {
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(resultado));
}

