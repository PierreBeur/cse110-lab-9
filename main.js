const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const output = document.querySelector('output');
  const firstNum = document.querySelector('#first-num').value;
  const secondNum = document.querySelector('#second-num').value;
  const operator = document.querySelector('#operator').value;
  output.innerHTML = calculate(firstNum, operator, secondNum);
});

// Buttons for Console Testing
const errorBtns = document.querySelectorAll('#error-btns > button');
const x = 2;
const y = 3;
const reason = 'x is expected to be equal to y';
const table = [
  {code: 'CSE 120', title: ' Principles of Computer Operating Systems'},
  {code: 'ECE 111', title: 'Advanced Digital Design Project'},
  {code: 'CSE 167', title: 'Computer Graphics'},
  {code: 'ECE 140A', title: 'The Art of Product Engineering I'}
];
const clickFunctions = {
  'Console Log':            () => console.log('Console Log'),
  'Console Error':          () => console.error('Console Error'),
  'Console Count':          () => console.count('Console Count'),
  'Console Warn':           () => console.warn('Console Warn'),
  'Console Assert':         () => console.assert(x == y, {x, y, reason}),
  'Console Clear':          () => console.clear(),
  'Console Dir':            () => console.dir(clickFunctions),
  'Console dirxml':         () => console.dirxml(document),
  'Console Group Start':    () => console.group('Console Group Start'),
  'Console Group End':      () => console.groupEnd('Console Group Start'),
  'Console Table':          () => console.table(table),
  'Start Timer':            () => console.time('Start Timer'),
  'End Timer':              () => console.timeEnd('Start Timer'),
  'Console Trace':          () => console.trace(),
  'Trigger a Global Error': () => boom()
}
for (const button of errorBtns) {
  button.addEventListener('click', clickFunctions[button.innerText]);
}

function calculate(firstNum, operator, secondNum) {
  // Try/Catch
  try {
    validateNumericInput(firstNum);
    validateNumericInput(secondNum);
    return eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (e) {
    console.error(e);
    return null;
  }
}

// Throw
function validateNumericInput(input) {
  if (isNaN(input)) {
    throw new ValidationError(`Invalid input: ${input}`);
  }
}

// Custom Error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Global Error Handler
window.addEventListener('error', e => {
  console.warn(`Global Error Handler: ${e.message}`);
});
