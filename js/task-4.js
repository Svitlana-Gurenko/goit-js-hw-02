'use strict';

function getShippingCost(country) {
  let price = 0;

  switch (country) {
    case 'China':
      price = 100;
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Chile':
      price = 250;
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Australia':
      price = 170;
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Jamaica':
      price = 120;
      return `Shipping to ${country} will cost ${price} credits`;
    default:
      return 'Sorry, there is no delivery to your country.';
  }
}
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

/*Залиш цей код для перевірки ментором.



Вимоги

Оголошено функцію getShippingCost(country).
У тілі функції використано інструкцію switch.
Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits".
Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country".
Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits".
Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits".
Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits".
Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country".
Виклик з будь-якими валідними аргументами повертає правильне значення.
Результати всіх викликів виведено в консоль.
Завдання очікує виконання*/
