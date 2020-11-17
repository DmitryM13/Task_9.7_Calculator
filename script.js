let lastOperand = 0;
let operation = null;

//const inputWindow = document.getElementById('#inputWindow');
const inputWindow = document.querySelector('#inputWindow');
inputWindow.value = 0;
const memoryWindow = document.querySelector('#memoryWindow')


document.querySelector('#btn_1').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        inputWindow.value = '';
    }
    inputWindow.value += '1';
})

document.querySelector('#btn_2').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        inputWindow.value = '';
    }
    inputWindow.value += '2';
})

document.querySelector('#btn_3').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        inputWindow.value = '';
    }
    inputWindow.value += '3';
})

document.querySelector('#btn_4').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        inputWindow.value = '';
    }
    inputWindow.value += '4';
})

document.querySelector('#btn_5').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        inputWindow.value = '';
    }
    inputWindow.value += '5';
})

document.querySelector('#btn_6').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        inputWindow.value = '';
    }
    inputWindow.value += '6';
})

document.querySelector('#btn_7').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        inputWindow.value = '';
    }
    inputWindow.value += '7';
})

document.querySelector('#btn_8').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        inputWindow.value = '';
    }
    inputWindow.value += '8';
})

document.querySelector('#btn_9').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        inputWindow.value = '';
    }
    inputWindow.value += '9';
})

document.querySelector('#btn_0').addEventListener('click', function () {
    if (inputWindow.value === '0'){
        inputWindow.value = '';
    }
    inputWindow.value += '0';
})

document.querySelector('#btn_dot').addEventListener('click', function () {
    if (inputWindow.value.includes('.') == false){
        inputWindow.value += '.';
    }
})

document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '0';
})

document.querySelector('#btn_dif').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'dif';
    inputWindow.value = '0';
})

document.querySelector('#btn_unary').addEventListener('click', function () {
    inputWindow.value = -inputWindow.value;
})

document.querySelector('#btn_multiply').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'multiply';
    inputWindow.value = '0';
})

document.querySelector('#btn_divide').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'divide';
    inputWindow.value = '0';
})

document.querySelector('#btn_square').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    const result = Math.sqrt(lastOperand);
    inputWindow.value = result;
    memoryWindow.value += '\n' + '√' + lastOperand + ' = ' + result;
})

document.querySelector('#btn_calc').addEventListener('click', function () {
    if (operation === 'sum') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand + parseFloat(inputWindow.value);
        memoryWindow.value += '\n' + lastOperand + ' + ' + secondOperand + ' = ' + result;
        inputWindow.value = result;
        operation = null;
        lastOperand = 0;
    }
    if (operation === 'dif') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand - parseFloat(inputWindow.value);
        memoryWindow.value += '\n' + lastOperand + ' - ' + secondOperand + ' = ' + result;
        inputWindow.value = result;
        operation = null;
        lastOperand = 0;
    }
    if (operation === 'multiply') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand * parseFloat(inputWindow.value);
        memoryWindow.value += '\n' + lastOperand + ' * ' + secondOperand + ' = ' + result;
        inputWindow.value = result;
        operation = null;
        lastOperand = 0;
    }
    if (operation === 'divide') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand / parseFloat(inputWindow.value);
        memoryWindow.value += '\n' + lastOperand + ' / ' + secondOperand + ' = ' + result;
        inputWindow.value = result;
        operation = null;
        lastOperand = 0;
    }
})

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

