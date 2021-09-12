/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
 */
function fibonacci(n) {
  let fibonacciNumber = 1;
  let fibonacciPreviousNumber = 0;
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  for (i = 3; i <= n; i++) {
    fibonacciNumber = fibonacciPreviousNumber + fibonacciNumber;
    fibonacciPreviousNumber = fibonacciNumber - fibonacciPreviousNumber;
  }
  return fibonacciNumber;
  // Напишите код здесь
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log(fibonacci(23)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
