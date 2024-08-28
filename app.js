function encriptarTexto(texto){
    let textoEncriptado = '';
    let caracter;
    for(let i = 0; i < texto.length; i++){
        caracter = texto[i];
        if(caracter === 'a'){
            textoEncriptado += 'ai';
        }
        else if(caracter === 'e'){
            textoEncriptado += 'enter';
        }
        else if(caracter === 'i'){
            textoEncriptado += 'imes';
        }
        else if(caracter === 'o'){
            textoEncriptado += 'ober';
        }
        else if(caracter === 'u'){
            textoEncriptado += 'ufat';
        }
        else{
            textoEncriptado += caracter;
        }
    }
    return textoEncriptado;
}

function encriptar(){
    console.log("Encriptar");
    let input = document.getElementById("inputUsuario").value;
    if(input !== ""){
        let textoEncriptado = encriptarTexto(input);
        document.getElementById("texto_resultado").textContent = textoEncriptado;
        document.getElementById('texto_resultado').removeAttribute('hidden');
        document.getElementById('imagen_default').setAttribute('hidden', true);
        document.getElementById('mensaje_1_default').setAttribute('hidden', true);
        document.getElementById('mensaje_2_default').setAttribute('hidden', true);
        document.getElementById('container_resultado').style.justifyContent = 'flex-start';
    }
}

function desencriptarTexto(texto){
    texto = texto.replace(/ai/gi, 'a');
    texto = texto.replace(/enter/gi, 'e');
    texto = texto.replace(/imes/gi, 'i');
    texto = texto.replace(/ober/gi, 'o');
    texto = texto.replace(/ufat/gi, 'u');
    return texto;
}

function desencriptar(){
    let input = document.getElementById("inputUsuario").value;
    if(input !== ""){
        let textoDesencriptado = desencriptarTexto(input);
        document.getElementById("texto_resultado").textContent = textoDesencriptado;
        document.getElementById('texto_resultado').removeAttribute('hidden');
        document.getElementById('imagen_default').setAttribute('hidden', true);
        document.getElementById('mensaje_1_default').setAttribute('hidden', true);
        document.getElementById('mensaje_2_default').setAttribute('hidden', true);
        document.getElementById('container_resultado').style.justifyContent = 'flex-start';
    }
}