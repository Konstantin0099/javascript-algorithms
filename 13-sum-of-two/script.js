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
  console.log("входящий массив и сумма", arr, sum);
  if (arr.length < 2) {
    return false;
  }
  arr.sort((a, b) => {
    return a - b;
  });
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    //первый цикл
    console.log(
      "первый цикл",
      "arr[",
      i,
      "]=",
      arr[i],
      "+ arr[",
      j,
      "]=",
      arr[j],
      " sum = ",
      arr[i] + arr[j]
    );
    if (arr[i] + arr[j] >= sum) {
      break;
    }
    j = j + 1;
  }
  if (arr[j - 1] + arr[j] === sum) {
    return true;
  }
  let i = j - 2;
  console.log(
    "второй цикл",
    "arr[",
    i,
    "]=",
    arr[i],
    "+ arr[",
    j,
    "]=",
    arr[j],
    " sum = ",
    arr[i] + arr[j]
  );
  do {
    // второй цикл
    if (i < 0 || j > arr.length) {
      return false;
    }
    if (arr[i] + arr[j] === sum) {
      return true;
    }
    if (arr[i] + arr[j] >= sum) {
      i--;
    } else {
      j++;
    }
    console.log(
      "второй цикл",
      "arr[",
      i,
      "]=",
      arr[i],
      "+ arr[",
      j,
      "]=",
      arr[j],
      " sum = ",
      arr[i] + arr[j]
    );
  } while (arr[i] + arr[j] !== sum);
  return true;
}


console.log(sumOfTwo([1, 2, 4, 6, 8, 10], 11));

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false
console.log(
  sumOfTwo(
    [
      999, 999, 999, 1, 2, 3, 4, 5, 55, 55, 55, 55, 55, 55, 999, 999, 999, 1000,
      1001, 1002,
    ],
    1001
  )
); // false
