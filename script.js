let operation;
let numberOne;
let numerTwo;

const clear = document.getElementById("clear");
const screen = document.getElementById("screen");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const del = document.getElementById("delete");
const dot = document.getElementById("dot");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");

clear.onclick = () => clearText();
zero.onclick = (e) => addText(e);
one.onclick = (e) => addText(e);
two.onclick = (e) => addText(e);
three.onclick = (e) => addText(e);
four.onclick = (e) => addText(e);
five.onclick = (e) => addText(e);
six.onclick = (e) => addText(e);
seven.onclick = (e) => addText(e);
eight.onclick = (e) => addText(e);
nine.onclick = (e) => addText(e);
del.onclick = () => deleteText();
times.onclick = (e) => operator(e);
plus.onclick = (e) => operator(e);
minus.onclick = (e) => operator(e);
divide.onclick = (e) => operator(e);
dot.onclick = (e) =>
  screen.textContent.includes(".")
    ? (dot.disabled = true)
    : ((dot.disabled = false), addText(e));

function deleteText() {
  let string = screen.textContent.slice(0, screen.textContent.length - 1);
  screen.textContent = string;
}

function clearText() {
  screen.textContent = "";
}

function addText(e) {
  dot.disabled = false;
  if (screen.textContent.length <= 8) {
    screen.textContent += e.target.textContent;
  }
}

function operator(e) {
  if (screen.textContent === "") {
  } else {
    numberOne = Number(screen.textContent);
    operation = e.target.textContent;
    console.log(operation);
    console.log(numberOne);
    clearText();
  }
}
