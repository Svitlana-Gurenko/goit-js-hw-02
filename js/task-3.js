'use strict';


function checkForSpam(message) {
  let text = message.toLowerCase();
  if (text.includes('spam') || text.includes('sale')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

/*Залиш цей код для перевірки ментором.



Вимоги

Оголошено функцію checkForSpam(message).
Виклик checkForSpam("Latest technology news") повертає false.
Виклик checkForSpam("JavaScript weekly newsletter") повертає false.
Виклик checkForSpam("Get best sale offers now!") повертає true.
Виклик checkForSpam("Amazing SalE, only tonight!") повертає true.
Виклик checkForSpam("Trust me, this is not a spam message") повертає true.
Виклик checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true.
Виклик checkForSpam("[SPAM] How to earn fast money?") повертає true.
Виклик з будь-якими валідними аргументами повертає правильне значення.
Результати всіх викликів виведено в консоль*/
