// Allyvia Holland Final Exam 07-22-25
function addLoop(num) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${num} + ${i} = ${num + i}\n`;
  }
  document.getElementById('addition').textContent = result;
}

function subtractLoop(num) {
  let result = '';
  let i = 1;
  while (i <= 10) {
    result += `${num} - ${i} = ${num - i}\n`;
    i++;
  }
  document.getElementById('subtraction').textContent = result;
}

function multiplyLoop(num) {
  let result = '';
  let i = 1;
  do {
    result += `${num} × ${i} = ${num * i}\n`;
    i++;
  } while (i <= 10);
  document.getElementById('multiplication').textContent = result;
}

function divideLoop(num) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${num} ÷ ${i} = ${(num / i).toFixed(2)}\n`;
  }
  document.getElementById('division').textContent = result;
}

function calculateAll() {
  const input = document.getElementById('num').value;
  const number = parseFloat(input);
  if (isNaN(number)) {
    alert('Please enter a valid number.');
    return;
  }

  addLoop(number);
  subtractLoop(number);
  multiplyLoop(number);
  divideLoop(number);
}

document.addEventListener('DOMContentLoaded', () => {
  const calcBtn = document.getElementById('calcBtn');
  calcBtn.addEventListener('click', calculateAll);
});
