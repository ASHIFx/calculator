let display = document.getElementById("display");
let lastInput = "";

function appendNumber(num) {
  display.value += num;
  lastInput = num;
}

function appendOperator(op) {
  if (display.value === "") 
    return;         
  if (isOperator(lastInput)) 
    return;       

  display.value += op;
  lastInput = op;
}

function calculate() {
  if (isOperator(lastInput)) 
    return;        

  try {
    display.value = eval(display.value);
    lastInput = "";
  } 
  catch {
    display.value = "Error";
  }
}

function appendDot() {
  const parts = display.value.split(/[\+\-\*\/]/);
  const lastPart = parts[parts.length - 1];

  if (lastPart.includes(".")) return;      

  display.value += ".";
  lastInput = ".";
}

function backspace() {
  display.value = display.value.slice(0, -1);
  lastInput = display.value.slice(-1);
}

function clearDisplay() {
  display.value = "";
  lastInput = "";
}

function allClear() {
  display.value = "";
  lastInput = "";
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}