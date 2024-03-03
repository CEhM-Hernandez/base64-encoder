const switchBtn = document.getElementById('switch');
const encodeBtn = document.getElementById('encodeButton');
const txt = document.getElementById('txt');

const inputArea = document.getElementById('inputArea');
const decodeArea = document.getElementById('decodeArea')

function encode() {
    encodeBtn.onclick = () => {
        decodeArea.value = btoa(inputArea.value);
    }
}

function decode() {
    encodeBtn.onclick = () => {
        decodeArea.value = atob(inputArea.value);
    }
}

function switchInputs(input, output) {
    let aux = input.value;
    input.value = output.value;
    output.value = aux;
}

switchBtn.onclick = () => {

    document.getElementById('switchFavicon').style.transform = 'rotate(calc(360 - 90deg))';

    switchInputs(inputArea, decodeArea);

    if (encodeBtn.textContent === 'encriptar') {
        encodeBtn.textContent = 'desencriptar';
        txt.textContent = 'texto';

        inputArea.setAttribute('placeholder', 'Ingrese el texto encriptado en base 64...');
        decodeArea.setAttribute('placeholder', 'Salida del texto desencriptado...');

        decode();
    } else {
        encodeBtn.textContent = 'encriptar';
        txt.textContent = 'base64';

        inputArea.setAttribute('placeholder', 'Ingrese el texto...');
        decodeArea.setAttribute('placeholder', 'Salida del texto encriptado en base64...');

        encode();
    }
}

encode();



