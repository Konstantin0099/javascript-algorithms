/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
 */
function findVowels(str) {
  const vowelLetters = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];
  const string = str.toLowerCase();
  const lengthVowelLetters = vowelLetters.length;
  const lengthStr = string.length;
  let number = 0;
  for (indexStr = 0; indexStr < lengthStr; indexStr++) {
    for (
      indexVowelLetters = 0;
      indexVowelLetters < lengthVowelLetters;
      indexVowelLetters++
    ) {
      if (string[indexStr] === vowelLetters[indexVowelLetters]) {
        number++;
        break;
      }
    }
  }
  return number;
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels("здравствуй")); // 2
console.log(findVowels("привет")); // 2
console.log(findVowels("хеллоу")); // 3
console.log(
  findVowels("Протестируйте решение, вызывая функцию с разными аргументами")
);
