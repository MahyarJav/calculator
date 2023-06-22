let a = "";
let b = "";
let operator = ""
let text;
let calculation = ""
const OPERATOR_LIST = {
    "add": String.fromCharCode(43),
    "subtract": String.fromCharCode(45),
    "multiply": String.fromCharCode(215),
    "divide": String.fromCharCode(247)
};
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}


function operate(a, operator, b) {
    if (operator === "add") {
        return add(a, b);
    } if (operator === "subtract") {
        return subtract(a, b);
    } if (operator === "multiply") {
        return multiply(a, b)
    } if (operator === "divide") {
        return divide(a, b)
    }
}
const paragraph = document.getElementById("calc-display");
const paraA = document.getElementById("a-text")
const paraB = document.getElementById("b-text")
const paraOp = document.getElementById("operator-text")
const answer = document.getElementById("answer-text")
function calc(arg) {
    if (typeof arg === "number") {
        answer.textContent = ""
        calculation = ""
        if (operator === "") {
            a += arg;
            paraA.textContent += arg
        } if (a !== "" && operator !== "") {
            b += arg;
            paraB.textContent += arg
        }
    } else if (arg !== "equal" && typeof arg === "string") {
        operator = arg
        paraOp.textContent = OPERATOR_LIST[`${arg}`]
        if (calculation !== "") {
            a = calculation;
            paraA.textContent = a
            answer.textContent = ""
            calculation = ""
        }
    }
    if (arg === "equal") {
        if (calculation !== "") {
            calculation *= 2
            answer.textContent = calculation
        } else {
            paraA.textContent = ""
            paraB.textContent = ""
            paraOp.textContent = ""
            calculation = parseInt(operate(parseInt(a), operator, parseInt(b)))
            answer.textContent = calculation
            a = ""
            b = ""
            operator = ""
        }
    } if (arg === "clear") {
        paraA.textContent = ""
        paraB.textContent = ""
        paraOp.textContent = ""
        a = ""
        b = ""
        operator = ""
    }
}

const buttonDiv = document.getElementById("calc-buttons")
buttonDiv.querySelectorAll("div")
    .forEach(button => button
        .addEventListener("click", (e) => {
            let input;
            switch (e.currentTarget.id) {
                case "one":
                    input = 1
                    break;
                case "two":
                    input = 2
                    break;
                case "three":
                    input = 3
                    break;
                case "four":
                    input = 4
                    break;
                case "five":
                    input = 5
                    break;
                case "six":
                    input = 6
                    break;
                case "seven":
                    input = 7
                    break;
                case "eight":
                    input = 8
                    break;
                case "nine":
                    input = 9
                    break;
                case "zero":
                    input = 0
                    break;
                case "":
                    break;
                default:
                    input = `${e.currentTarget.id}`
                    break;
            }
            calc(input)
        }))