/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
        let sumNull = 0;
    for (i = 1; i <= n; i++) {
        let string = String(i);
        let  arrayOfNumber = Array.from(string);
        let arrayNull = arrayOfNumber.filter(number => number === "0" );
        sumNull = sumNull + arrayNull.length;
    }
    return sumNull;
    // Напишите код здесь
}
// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
