document.getElementById("entrada-texto").addEventListener("keydown", function(event) {
  // Permitir solo letras minúsculas y teclas de control como backspace y delete
  if (!event.ctrlKey && !event.metaKey && !event.altKey && event.key !== " " && event.key.length === 1 && event.key.match(/[^a-z]/)) {
      event.preventDefault();
  }
});

//Función para encriptar los mensajes
function encriptarTexto(){ 
    var textoOriginal = document.getElementById("entrada-texto").value;
    var textoEncriptado = encriptarTextoFuncion(textoOriginal);

    document.getElementById("salida-texto").value = textoEncriptado;
    document.getElementById("img").style.display = "none";
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

//Función para desencriptar los mensajes
function desencriptarTexto(){
    var textoOriginal = document.getElementById("entrada-texto").value;

    var textoEncriptado = desencriptarTextoFuncion(textoOriginal);
    document.getElementById("salida-texto").value = textoEncriptado;
    console.log(textoOriginal);
    console.log(textoEncriptado);
}

function desencriptarTextoFuncion(texto) {
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    texto = texto.replace(/enter/g, "e");

    return texto;
}


async function copiarContenido() {
    try {
      await navigator.clipboard.writeText(document.getElementById("salida-texto").value);
      console.log('Contenido copiado al portapapeles');
      /* Resuelto - texto copiado al portapapeles con éxito */
    } catch (err) {
      console.error('Error al copiar: ', err);
      /* Rechazado - fallo al copiar el texto al portapapeles */
    }
    alert("Texto copiado")
  }
