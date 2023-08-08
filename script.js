let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += ' ' + operator + ' ';
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function deleteLast() {
  if (displayValue !== '0') {
    displayValue = displayValue.slice(0, -1);
    if (displayValue.trim() === '') {
      displayValue = '0';
    }
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}


updateDisplay();
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === 'Enter') {
      appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendOperator(key);
    } else if (key === 'Backspace') {
      deleteLast();
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });