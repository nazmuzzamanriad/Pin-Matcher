function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }


}


function generatePin() {
    const pin = getPin();
    document.getElementById("pinDisplay").value = pin;

}


// click handler at button parent

document.getElementById("key-pad").addEventListener('click', function (event) {
    const inputNumber = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");



    if (isNaN(inputNumber)) {
        if (inputNumber == "C") {
            calcInput.value = "";
        }
    }
    else {

        const previousNumber = calcInput.value;


        const newNumber = previousNumber + inputNumber;

        calcInput.value = newNumber;

    }




})

function verifyPin() {
    const pin = document.getElementById('pinDisplay').value;
    const typedNum = document.getElementById("typed-numbers").value;

    const pinpass = document.getElementById("pin-success");
    const pinfail = document.getElementById('pin-fail')
    if (pin == typedNum) {

        pinpass.style.display = 'block';
        pinfail.style.display = "none";

    }
    else {
        pinfail.style.display = "block";
        pinpass.style.display = 'none';

    }
}