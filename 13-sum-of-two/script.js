/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 *
 */

function sumOfTwo(arr, sum) {
    if (arr.length < 2) { return false; }
    arr.sort((a, b) => { return a - b});
  console.log(" стр 13 arr, sum", arr, sum);
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[j] >= sum) {
      console.log(arr[i], arr[j], sum, "arr[", i, "]", "+ arr[", j, "]", "< sum");
break;
    }
    j = j + 1;
  };
  console.log("стр 22 arr[", j - 1, "]", "+ arr[", j, "] === sum", arr[j - 1], arr[j], sum);
  if (arr[j - 1] + arr[j] === sum) {
    return true;
  };
  let i = j - 2;
  do {
    console.log("стр 28 arr(", i, ") arr(", j, ") sum DO", arr[i], arr[j], sum);
    if (i < 0 || j > arr.length) {
        console.log("стр 30 return false"); return false;
    };
    if (arr[i] + arr[j] === sum) {
        return true;
      };
    if (arr[i] + arr[j] >= sum) {
      i--;
    } else {
      j--;
    };
    console.log("arr(i) + arr(j) проверка While", arr[i], arr[j], sum);
  } while ((arr[i] + arr[j]) !== sum);
  console.log("стр 39 arr(i) + arr(j) = sum ЗАВЕРШЕНИЕ WHILE", arr[i], arr[j], sum);
  return true;

  // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false
console.log(sumOfTwo([999, 999, 999, 1, 2, 3, 4, 5, 55, 55, 55, 55, 55, 55, 999, 999, 999, 1000, 1001, 1002], 1001)); // false

