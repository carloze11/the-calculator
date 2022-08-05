// Inital variables
let firstVal = 0;
let secondVal = 0;

// Operator Functions
const add = (a,b) => +a + +b;
const subtract = (a,b) => +a - +b;
const multiply = (a,b) => +a * +b;
const divide = (a,b) => +a / +b;
const operate = (op, n1, n2) => {
  if (op === 'add') {
      disVal = add(n1, n2).toString();      
    } else if (op === 'subtract') {
      disVal = subtract(n1, n2).toString();
    } else if (op === 'multiply') {
      disVal = multiply(n1, n2).toString();
    } else if (op === 'divide') {
      disVal = divide(n1, n2).toString();
    }
  // if (op === 'add'){
  //   return add(n1,n2);
  // } else if (op === 'subtract'){
  //   return subtract(n1,n2);
  // } else if (op === 'multiply'){
  //   return multiply(n1,n2);
  // } else if (op === 'divide'){
  //   return divide(n1,n2);
  // }
};


const display = document.querySelector('.display');
let disVal = '0';
const num = document.querySelectorAll('.num');

// Display numbers when clicked 
const clickNum = () => {
  num.forEach(number => {
    number.addEventListener('click', () => {
      if (display.textContent === '0' || 0){
        disVal = '';
      };
      if (number.classList[1] === "num"){
        disVal += number.textContent;
        display.textContent = disVal;
      };      
      if (disVal.length >= 9){
        display.textContent = disVal.substring(0,9);
      };
    })
  })
}

clickNum();


// Clear the display using the 'C' button
const clearVal = document.querySelector('.clear');
const clearDisplay = () => {
  clearVal.addEventListener('click', () =>{
    display.textContent = '0';
    disVal = '0';
    opUsed = '';
    firstVal = '0';
    secondVal = '0';
  });
}

clearDisplay();

// Save value n1, save operator value, & reset display
const op = document.querySelectorAll('.op');
let opUsed = '';
const opNext = () => {
  op.forEach(operator => {
    operator.addEventListener('click', () => {
      if (opUsed === ''){
        firstVal = disVal.substring(0,9);
        disVal = '';
        opUsed = operator.classList[2];
      } else {
        secondVal = disVal.substring(0,9);
        operate(opUsed, firstVal, secondVal);
        display.textContent = disVal.substring(0,9);
        firstVal = display.textContent;
        console.log(firstVal)
        disVal = ''
        secondVal = '0';
        opUsed = operator.classList[2];
      }
   })
  })
}

opNext();


// Save n2 and call operator function
const equals = document.querySelector('.equals')
const onEquals = () => {
  equals.addEventListener('click', () => {
    secondVal = disVal.substring(0,9);
    operate(opUsed, firstVal, secondVal);
    display.textContent = disVal.substring(0,9);
    firstVal = display.textContent;
    secondVal = '0';
    opUsed = '';
  })
}

onEquals();

