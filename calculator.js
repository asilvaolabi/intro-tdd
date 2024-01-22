let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function calculateSalary() {
    const horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value) || 0;
    const valorPorHora = parseFloat(document.getElementById('valorPorHora').value) || 0;

    const salario = horasTrabalhadas * valorPorHora;

    displayValue = salario.toFixed(2);
    updateDisplay();
}

// Event listener para o formulário
document.getElementById('calculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();
    calculateResult();
});
