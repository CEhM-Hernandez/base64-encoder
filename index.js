const switchBtn = document.getElementById("switchBtn");
const clipboardBtn = document.getElementById("clipboardBtn");

const inputTxt = document.getElementById("inputTxt");
const outputTxt = document.getElementById("outputTxt");

const inputArea = document.getElementById("inputArea");
const decodeArea = document.getElementById("decodeArea");

//--------------------- functions ---------------------//

inputArea.addEventListener("keyup", function () {
    decodeArea.value = `${inputTxt.textContent === "encriptar" ? btoa(inputArea.value) : atob(inputArea.value)}`;
});

function switchInputs(input, output) {
    let aux = input.value;
    input.value = output.value;
    output.value = aux;
}

//--------------------- main event (switch/encode-decode) ---------------------//

switchBtn.onclick = () => {

    const switchTooltip = document.getElementById("switchTooltip");

    switchInputs(inputArea, decodeArea);

    if (inputTxt.textContent === "encriptar") {
        switchTooltip.textContent = inputTxt.textContent;
        inputTxt.textContent = "desencriptar";
        outputTxt.textContent = "texto";

        inputArea.setAttribute("placeholder", "Ingrese el código en base 64...");
        decodeArea.setAttribute("placeholder", "Salida del texto desencriptado...");
    } else {
        switchTooltip.textContent = inputTxt.textContent;
        inputTxt.textContent = "encriptar";
        outputTxt.textContent = "base64";

        inputArea.setAttribute("placeholder", "Ingrese el texto...");
        decodeArea.setAttribute("placeholder", "Salida del código encriptado en base64...");
    }
}

//--------------------- copy to clipboard ---------------------//

clipboardBtn.onclick = () => {
    navigator.clipboard.writeText(decodeArea.value);

    const copyAlert = document.getElementById("copyAlert");

    copyAlert.style.bottom = "50%";
    copyAlert.style.opacity = ".95";

    setTimeout(() => {
        copyAlert.style.bottom = "0";
        copyAlert.style.opacity = "0";
    }, 2000);
}