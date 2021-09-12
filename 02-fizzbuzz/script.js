/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
 */
function fizzBuzz(num) {
  for (i = 1; i <= num; i++) {
    let multipleFiveIfZero = i % 5;
    let multipleThreeIfZero = i % 3;

    if (!(multipleFiveIfZero + multipleThreeIfZero)) {
      console.log("fizzbuzz");
    } else if (!multipleFiveIfZero) {
      console.log("buzz");
    } else if (!multipleThreeIfZero) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
  // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));
