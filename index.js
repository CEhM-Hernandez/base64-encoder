const switchBtn = document.getElementById('switch');
const clipboardBtn = document.getElementById('clipboardBtn');

const encodeBtn = document.getElementById('encodeButton');
const txt = document.getElementById('txt');

const inputArea = document.getElementById('inputArea');
const decodeArea = document.getElementById('decodeArea');

//--------------------- functions ---------------------//

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

//--------------------- main event (switch/encode-decode) ---------------------//

switchBtn.onclick = () => {

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

//--------------------- copy to clipboard ---------------------//

clipboardBtn.onclick = () => {
    navigator.clipboard.writeText(decodeArea.value);

    document.getElementById('copy-popup').style.opacity = '1';
    setTimeout(() => {
        document.getElementById('copy-popup').style.opacity = '0';
    }, 2000);
}

//--------------------- default function ---------------------//

encode();