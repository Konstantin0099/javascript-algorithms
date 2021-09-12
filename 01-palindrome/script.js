/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
 */

function palindrome(str) {
  const string = str.toLowerCase();
  const lengthString = string.length;
  for (i = 0; i < (lengthString - 1) / 2; i++) {
    let countdown = lengthString - 1 - i;
    if (string[i] !== string[countdown]) {
      return false;
    }
  }
  return true;
}
// Напишите код здесь

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(palindrome(""));
console.log(palindrome("топот")); // должно быть true
console.log(palindrome("Saippuakivikauppias")); // true
console.log(palindrome("привет")); // false
console.log(palindrome("Saippuakdsfgsdgdfsgdfhsgdhdhfhjklivikauppias"));
/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 *
 * palindrome('О, лета тело!'); // true
 *
 */
