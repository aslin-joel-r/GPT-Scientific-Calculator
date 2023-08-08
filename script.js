function appendToResult(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  try {
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  let currentResult = document.getElementById("result").value;
  document.getElementById("result").value = currentResult.slice(0, -1);
}

function calculateSquareRoot() {
  document.getElementById("result").value += "Math.sqrt(";
}

function calculatePower() {
  document.getElementById("result").value += "Math.pow(";
}

function calculateSin() {
  let currentResult = document.getElementById("result").value;
  let result = Math.sin(parseFloat(currentResult));
  document.getElementById("result").value = result;
}

function calculateCos() {
  let currentResult = document.getElementById("result").value;
  let result = Math.cos(parseFloat(currentResult));
  document.getElementById("result").value = result;
}

function calculateTan() {
  let currentResult = document.getElementById("result").value;
  let result = Math.tan(parseFloat(currentResult));
  document.getElementById("result").value = result;
}
