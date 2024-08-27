let textoSinEncriptar = "";
let textoEncriptado = "";
let textoDesencriptado = "";

function copiarAlPortapapeles() {
    
    let textarea = document.getElementById('salida');

    // Seleccionar el texto del textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles
    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');

    alert("Texto copiado al portapapeles");
}

function desencriptador(){

    textoDesencriptado=textoEncriptado.replace(/ai/g,"a");
    textoDesencriptado=textoDesencriptado.replace(/enter/g,"e");
    textoDesencriptado=textoDesencriptado.replace(/imes/g,"i");
    textoDesencriptado=textoDesencriptado.replace(/ober/g,"o");
    textoDesencriptado=textoDesencriptado.replace(/ufat/g,"u");
}
function unirEncriptador(caracter){
    textoEncriptado=textoEncriptado+caracter;
}
function encriptador(){
    for (let i = 0;i <textoSinEncriptar.length ;i++){

        if (textoSinEncriptar[i]=="a"){
            unirEncriptador("ai"); 
        }else if (textoSinEncriptar[i]=="e"){
            unirEncriptador("enter"); 
        }else if (textoSinEncriptar[i]=="i"){
            unirEncriptador("imes");
        }else if (textoSinEncriptar[i]=="o"){
            unirEncriptador("ober");
        }else if (textoSinEncriptar[i]=="u"){
            unirEncriptador("ufat");
        }else{
            unirEncriptador(textoSinEncriptar[i]);
        }   
    }
}

document.getElementById('Encriptar').addEventListener('click', function() {
    textoEncriptado="";
    textoSinEncriptar = document.getElementById('ingreso').value;
    encriptador();
    document.getElementById('salida').value = textoEncriptado;
});

document.getElementById('Desencriptar').addEventListener('click', function() {
    
    textoEncriptado = document.getElementById('ingreso').value;
    desencriptador();
    document.getElementById('salida').value = textoDesencriptado;   
});

document.getElementById('Copiar').addEventListener('click', function() {
    copiarAlPortapapeles();
});
