const textArea = document.querySelector('#text-area');
const btns = document.querySelectorAll('.btn-group>span');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const { classList, innerText } = e.target;
    if (classList.contains('num')) {
      addNums(innerText);
    } else if (classList.contains('opr')) {
      addOpr(innerText);
    } else if (classList.contains('calc')) {
      calc();
    } else if (classList.contains('delete')) {
      del();
    } else if (classList.contains('clear')) {
      clear();
    }
  });
});
// Add key events
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
    case '.':
      addNums(e.key);
      break;
    case '/':
    case '*':
    case '+':
    case '-':
    case '%':
      addOpr(e.key);
      break;
    case 'Enter':
      calc();
      break;
    case 'Backspace':
      del();
      break;
    case 'c':
      clear();
    default:
  }
});

const addNums = (text) => {
  let { value } = textArea;
  const ruleA = value.length === 0 && text === '.';
  if (!ruleA) {
    textArea.value += text;
  }
};
const oprList = ['+', '-', '*', '/', '%', '.'];

const addOpr = (text) => {
  const { value } = textArea;
  const lastChar = value[value.length - 1]; //Don't add repeated operators and initially without numbers
  
  //If last character is operator then replace it with new operator
  if (oprList.includes(lastChar)) {
    textArea.value = textArea.value.slice(0, -1) + text;
  }
  else if (value.length > 0) {
    textArea.value += text;
  }
};

const del = () => {
  const { value } = textArea;
  if (value.length > 0) {
    textArea.value = textArea.value.slice(0, -1);
  }
};

const clear = () => {
  textArea.value = '';
};

const calc = () => {
  const { value } = textArea;
  const result = eval(value);
  if (!isNaN(result)) {
    textArea.value = result;
  } else {
    alert('Invalid Expression');
  }
};
