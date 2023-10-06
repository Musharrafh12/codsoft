document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let operator = "";
    let firstOperand = "";
    let secondOperand = "";
    let result = "";

    function updateDisplay() {
        display.value = currentInput;
    }

    function clearCalculator() {
        currentInput = "";
        operator = "";
        firstOperand = "";
        secondOperand = "";
        result = "";
        updateDisplay();
    }

    function calculate() {
        if (operator === "+") {
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
        } else if (operator === "-") {
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
        } else if (operator === "*") {
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
        } else if (operator === "/") {
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
        }

        currentInput = result.toString();
        firstOperand = "";
        secondOperand = "";
        operator = "";
        updateDisplay();
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.textContent;

            if (!isNaN(value) || value === ".") {
                currentInput += value;
                if (operator === "") {
                    firstOperand += value;
                } else {
                    secondOperand += value;
                }
                updateDisplay();
            } else if (value === "C") {
                clearCalculator();
            } else if (value === "=") {
                if (firstOperand !== "" && secondOperand !== "" && operator !== "") {
                    calculate();
                }
            } else {
                operator = value;
                currentInput = "";
            }
        });
    });
});