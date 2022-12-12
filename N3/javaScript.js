let op = function() {
    alert("Escolha uma opção antes")
}

function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if(num2 === 0){
        alert("Erro! Impossível dividir por zero!")
    }else{
        return num1 / num2;
    }
}

function operation() {
    const answer = document.getElementById('answer1');
    const select = document.getElementById('operation');

    const selectedOperation = select.selectedIndex;

switch (selectedOperation) {
    
        case 1:
answer.innerText = '+';
op = sum;
 break;
        case 2:
answer.innerText = '-';
op = sub;
break;n
        case 3:
answer.innerText = 'X';
op = mul;
break;
        case 4:
answer.innerText = '÷';
op = div;
 break;
default:
break;
    }
}

function calculate() {

const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
        const answer = document.getElementById('answer2');


const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
        const resp = op(num1, num2);
answer.innerText = resp;

}