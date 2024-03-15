function encriptarTexto(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}

// Ejemplo de uso
var textoOriginal = document.getElementById("entrada-texto");
var textoEncriptado = encriptarTexto(textoOriginal);
console.log(textoOriginal);
console.log(textoEncriptado);

function desencriptarTexto(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
}

var textoEncriptado2 = "Hoberlai"
var textoDesencriptado = desencriptarTexto(textoEncriptado2);
console.log(textoDesencriptado);