/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) { return false }
    const stringArray1 = Array.from(str1.toLowerCase());
    const stringArray2 = Array.from(str2.toLowerCase());
    stringArray1.sort();
    stringArray2.sort();
    return stringArray1.join() === stringArray2.join();
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('byehellobye', 'hellobyebyeeeeee')); 