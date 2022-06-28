const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');
keys.addEventListener('click',e => {
    if (e.target.matches('button')) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayedNum = display.textContent;
      const previousKeyType = calculator.dataset.previousKeyType;

      Array.from(key.parentNode.children)
          .forEach(key => key.classList.remove('is-depressed'));
      if (action !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]');
        clearButton.textContent = 'CE';
      }
      if (!action) {
        if (displayedNum === '0' || 
            previousKeyType === 'operator' ||
            previousKeyType === 'calculate'
            ) {
          display.textContent = keyContent;
          calculator.dataset.previousKeyType = 'number'
        } else {
          display.textContent = displayedNum + keyContent;
        }
        console.log('Number Key!');
      }
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
          const firstValue = calculator.dataset.firstValue;
          const operator = calculator.dataset.operator;
          const secondValue = displayedNum; 
        if (firstValue && 
            operator &&
            previousKeyType !== 'operator' &&
            previousKeyType !== 'calculate'
            )
             {
              const calcValue = calculate(firstValue, operator, secondValue);
              display.textValue = calcValue;
              calculator.dataset.firstValue = calcValue;
             } else {
          display.textContent = displayedNum;
        }
        key.classList.add('is-depressed');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
        console.log('Operator Key!');
      }
      if (action === 'decimal') {
        if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
        console.log('Decimal Key!')
        } else if (previousKeyType === 'operator' ||
                    previousKeyType === 'calculate'
                  ) {
          display.textContent = '0';
        }
        calculator.dataset.previousKeyType = 'decimal';
      }
      if (action === 'clear') {
        if (key.textContent === 'AC') {
          calculator.dataset.firstValue = '';
          calculator.dataset.modValue = '';
          calculator.dataset.operator = '';
          calculator.dataset.previousKeyType = '';
        } else {
        key.textContent = 'AC'
        }
                display.textContent = 0;
        calculator.dataset.previousKeyType = 'clear';
        console.log('Clear Key!');
      }
      if (action === 'calculate') {
        let firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        let secondValue = displayedNum;
        if (firstValue) {
          if (previousKeyType === 'calculate') {
              firstValue = displayedNum;
              secondValue = calculator.dataset.modValue;
          }
        display.textContent = calculate(firstValue,operator,secondValue);
        console.log('Equal Key!')
        }
        calculator.dataset.modValue = secondValue;
        calculator.dataset.previousKeyType = 'calculate'
      }
    }
})
const calculate = (n1,operator,n2) => {
  let result = '';
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if ( operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2);
  }
  return result;
}