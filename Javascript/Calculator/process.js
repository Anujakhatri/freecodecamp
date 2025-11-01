// function clearAll() {
// current = '';
// previous = '';
// operator = '';
// updateDisplay('0');
// }

const display = document.querySelector('.display');
// Basic Calculator Logic
let current = '';
let operator = '';
let previous = '';

function updateDisplay(value) {
   display.textContent = value;
}

function appendNumber(num) {
    current += num;
    updateDisplay(current);
}

function chooseOperator(op) {
    if (current === '') return;
    operator = op;
    previous = current;
    current = '';
}
function calculate() {
    let result = 0;
    const prev = parseFloat(previous);
    const curr = parseFloat(current);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '×':
            result = prev * curr;
            break;
        case '÷':
            result = prev / curr;
            break;
        default:
            return;
    }

    current = result;
    operator = '';
    previous = '';
    updateDisplay(result);
}

function backspace() {
    current = current.toString().slice(0, -1);
    updateDisplay(current || '0');
}

// Button Handling
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (!isNaN(value)) {
            appendNumber(value);
        } else if (value === '⌫') {
            backspace();
        } else if (value === '=') {
            calculate();
        } else {
            chooseOperator(value);
        }
    });
});
