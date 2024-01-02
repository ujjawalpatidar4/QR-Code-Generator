let inputText = document.querySelector('#qrtext')
let buttonQR = document.querySelector('button')
let QRImage = document.querySelector('#qrimage')
let imageBox = document.querySelector('#imagebox')

buttonQR.addEventListener('click', function () {
    let source = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

    let code = inputText.value
    let qrcode = source + code;

    if (code.length > 0) {
        QRImage.src = qrcode;
    }
    else {
        inputText.classList.add('error');
        setTimeout(() => {
            inputText.classList.remove('error');
        }, 1000)
    }
})