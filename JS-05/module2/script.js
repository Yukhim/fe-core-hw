let userInput;
let numbers = [];
let total = 0;
let isCorrect = true;
do {
  userInput = prompt("Enter your number");
  if (userInput == null) {
    if (numbers.length == 0) {
      break;
    } else {
      for (let item of numbers) {
        total += item;
      }
    }
    isCorrect = false;
    alert(`Общая сумма чисел равна ${total}`);
  } else if (isNaN(parseInt(userInput))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(parseInt(userInput));
    console.log(numbers);
  }
} while (isCorrect);
