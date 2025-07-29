let askUserNumber;
let isCnacelled = false;
let numberAskUserNumber;
while (true) {
   let askUserNumber = prompt('Яке ви загадали число?');
   if (askUserNumber === null) {
      alert('опервція скасована');
      isCnacelled = true;
      break;
   } else if (askUserNumber.trim() === '') {
      alert('Ведіть число');
      isCnacelled = true;
      continue
   }
   
    numberAskUserNumber = Number(askUserNumber);
   if (isNaN(numberAskUserNumber)) {
      alert('Ведіть число!');
      isCnacelled = true;
      continue;
   }
      
     if (numberAskUserNumber !== '') {
      break;
     }
}

function isEven(number) {
   if (number % 2 === 0) {
      return true
   } 
   return false;
};
//перевіряємо чи ділиться число на 3 без остачі
function isDivisibleByThree(number) {
   if (number % 3 === 0) {
      return true;
   }
   return false;
}
//перевіряємо на додатність
function isPositive(number) {
   if (number > 0) {
      return true
   }
   return false;
}
//робимо квадрат числа
function calculateSquare(number) {
   return number * number;
}
// робимо корінь із числа
function calculateRoot(number) {
   if (number < 0) {
      return  "Не існує (у дійсних числах)"// ← Людська відповідь
   }
  // let root = Math.sqrt(number);
   //return root;
   return Math.sqrt(number);
   
}
//фінальний результат
function analyzeNumber() {
  let evenNumber =  isEven(numberAskUserNumber);
  console.log(evenNumber);
  
  let positiveNumber = isPositive(numberAskUserNumber);
  let squareNumber = calculateSquare(numberAskUserNumber);
  let isDivisibleByThreeNumber = isDivisibleByThree(numberAskUserNumber);
  let rootNumber = calculateRoot(numberAskUserNumber);
  let evenText = evenNumber ? 'Так' : 'Ні';
  let positiveText = positiveNumber ? 'Так' : 'Ні';
  let isDivisibleByThreeText = isDivisibleByThreeNumber ? 'Так' : 'Ні';
   alert(`Магічний аналіз\n
          Парне: ${evenText}\n
          Націло ділиться на 3: ${isDivisibleByThreeText}\n
          Додатнє: ${positiveText}\n
          Квадрат: ${squareNumber}\n
          Корінь: ${rootNumber}` )
}
if (!isCnacelled) {
      analyzeNumber()
}
