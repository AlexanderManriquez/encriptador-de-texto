function encriptarTexto(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}

// Ejemplo de uso
var textoOriginal = "Hola, cómo estás?";
var textoEncriptado = encriptarTexto(textoOriginal);
console.log("Texto original: ", textoOriginal);
console.log("Texto encriptado: ", textoEncriptado);