// 1 

let array = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] == 10) {
        break;
    }
}

// 2

let array2 = [1, 5, 4, 10, 0, 3];
let index = array2.indexOf(4);
console.log(`[${index}]: ${4}`);

// 3

let array3 = [1, 3, 5, 10, 20];
array3 = array3.join(' ');
console.log(array3);

// 4

let rows = 3;
let cols = 3;
let array4 = [];
for (let j = 0; j < rows; j++) {
    let row = [];
    for (let k = 0; k < cols; k++) {
        row.push(1);
    }
    array4.push(row);
}
console.log(array4);

// 5

let array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5);

// 6 

let array6 = [9, 8, 7, 'a', 6, 5];
array6.sort();
array6 = array6.filter(element => element !== 'a');
console.log(array6);

// 7

let array7 = [9, 8, 7, 6, 5];
let use = Number(prompt('Попробуйте угадать число в массиве'));
if (array7.includes(use)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// 8

let string = 'abcdef';
let reversedString = string.split('').reverse().join('');
console.log(reversedString);

// 9

let array9 = [[1, 2, 3],[4, 5, 6]];
let newArray9 = [].concat(...array9);
console.log(newArray9);

// 10

let array10 = [3, 7, 2, 9, 4, 5, 8, 1, 6, 10];
for (let i = 0; i < array10.length; i++) {
    if (i + 1 < array10.length) {
        let sum = array10[i] + array10[i + 1];
        console.log(`Сумма элементов ${array10[i]} и ${array10[i + 1]} равна ${sum}`);
    }
}

// 11

function squareArray(arr) {
    let squaredArray = arr.map(num => num ** 2);
    return squaredArray;
}

let array11 = [1, 2, 3, 4, 5];
let newArray11 = squareArray(array11);
console.log(newArray11);

// 12

function getLength(arr) {
    let lengthArray = arr.map(word => word.length);
    return lengthArray;
}

let array12 = ['слово', '', 'слог', 'длинное предложение', 'буква'];
let newArray12 = getLength(array12);
console.log(newArray12);

// 13

function filterPositive(array) {
    let negativeArray = array.filter(num => num < 0);
    return negativeArray;
}
  
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);


  
  