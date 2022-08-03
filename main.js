const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const operate = (op, n1, n2) => {
  if (op === '+'){
    return add(n1,n2);
  } else if (op === '-'){
    return subtract(n1,n2);
  } else if (op === '*'){
    return multiply(n1,n2);
  } else if (op === '/'){
    return divide(n1,n2);
  }
};

const p = document.querySelector('p');
const btn = document.querySelectorAll('.btn');
p.defaultValue = 0;
btn.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.textContent);
    p.textContent = button.textContent;
  })
})