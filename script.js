let operation = null;
let numberOne;
let numberTwo;
let shouldClear = false;

const clear = document.getElementById("clear");
const screen = document.getElementById("screen");
const del = document.getElementById("delete");
const dot = document.getElementById("dot");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => addText(e));
});

clear.onclick = () => reset();
del.onclick = () => deleteText();
times.onclick = (e) => operator(e);
plus.onclick = (e) => operator(e);
minus.onclick = (e) => operator(e);
divide.onclick = (e) => operator(e);
dot.onclick = (e) =>
  screen.textContent.includes(".")
    ? (dot.disabled = true)
    : ((dot.disabled = false), addText(e));
equal.onclick = () => equate();
function deleteText() {
  let string = screen.textContent.slice(0, screen.textContent.length - 1);
  screen.textContent = string;
}

function operator(oper) {
  if (operation !== null) {
    console.log("equated but ntn showed up");
    equate();
  }
  numberOne = screen.textContent;
  operation = oper.target.textContent;
  shouldClear = true;
}

function equate() {
  if (operation === null || shouldClear) {
    return;
  }
  numberTwo = screen.textContent;
  screen.textContent = roundOff(calculate(operation, numberOne, numberTwo));
  operation = null;
}

function clearText() {
  screen.textContent = "";
  shouldClear = false;
}

function roundOff(num) {
  return Math.round(num * 100) / 100;
}

function reset() {
  clearText();
  numberOne = "";
  numberTwo = "";
  operation = null;
}
function addText(e) {
  if (shouldClear) {
    clearText();
  }
  dot.disabled = false;
  if (screen.textContent.length <= 8) {
    screen.textContent += e.target.textContent;
  }
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}

function division(a, b) {
  if (numberTwo === 0) {
    clearText();
    alert("HOW DARE YOU DIVIDE BY ZERO!!!");
  } else {
    return a / b;
  }
}

function calculate(op, a, b) {
  a = Number(a);
  b = Number(b);
  switch (op) {
    case "*":
      return multiply(a, b);
    case "-":
      return subtract(a, b);
    case "+":
      return add(a, b);
    case "/":
      return division(a, b);
    default:
      return null;
  }
}
