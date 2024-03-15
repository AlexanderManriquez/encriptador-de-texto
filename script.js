/*function encriptarTexto(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}*/

// Ejemplo de uso

function encriptarTexto(){
    var textoOriginal = document.getElementById("entrada-texto").value;

    var textoEncriptado = encriptarTextoFuncion(textoOriginal);

    document.getElementById("salida-texto").value = textoEncriptado;
    console.log(textoOriginal);
    console.log(textoEncriptado);
}

function encriptarTextoFuncion(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}

function desencriptarTexto(){
    var textoOriginal = document.getElementById("entrada-texto").value;

    var textoEncriptado = desencriptarTextoFuncion(textoOriginal);

    document.getElementById("salida-texto").value = textoEncriptado;
    console.log(textoOriginal);
    console.log(textoEncriptado);
}

function desencriptarTextoFuncion(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;

    return texto;
}



/*function desencriptarTexto(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
}

var textoEncriptado2 = "Hoberlai"
var textoDesencriptado = desencriptarTexto(textoEncriptado2);
console.log(textoDesencriptado); */