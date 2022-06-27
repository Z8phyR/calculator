//constants
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const displayInput = document.getElementById('input');
const btnplus = document.getElementById('add');
const btnsub = document.getElementById('subtract');
const btndiv = document.getElementById('divide');
const btnmult = document.getElementById('multiply');
const btnequal = document.getElementById('equals');
const btnclear = document.getElementById('clear');

//Variables that update
let operator;
let total = 0;
let first = 0;
let second = 0;
let display = total;


//Number Button Event Listeners
btn1.addEventListener("click",updateDisplay)
btn2.addEventListener("click",updateDisplay)
btn3.addEventListener("click",updateDisplay)
btn4.addEventListener("click",updateDisplay)
btn5.addEventListener("click",updateDisplay)
btn6.addEventListener("click",updateDisplay)
btn7.addEventListener("click",updateDisplay)
btn8.addEventListener("click",updateDisplay)
btn9.addEventListener("click",updateDisplay)
btn0.addEventListener("click",updateDisplay)

//Operation Button Event Listener
btnplus.addEventListener("click",operator = "plus");
btnsub.addEventListener("click",operator = "subtract");
btnmult.addEventListener("click",operator = "multiply");
btndiv.addEventListener("click",operator = "divide");

btnequal.addEventListener("click", operate(first,second))
btnclear.addEventListener("click",operator = "plus");

//operation functions

function add(...num) {
    operator = "add";
    return total = num[0] + num[1];
}

function subtract(...num) {
    operator = "subtract"
    return total = num[0] - num[1]
}

function multiply(...num) {
    operator = "multiply"
    return total = num[0] * num[1];
}

function divide (...num) {
    if (num[0] === 0) {
        return console.log("Cannot divide!")
    }
    operator = "divide"
    return total = num[0] / num[1]
}

function operate(a,b) {
  if (operator === "add") {
    return add(a,b);
  };
  if (operator === "subtract") {
    return subtract(a,b);
  };
  if (operator === "multiply") {
    return multiply(a,b);
  };
  if (operator === "divide") {
    return divide(a,b);
  }
  return total;
}

