console.log("hello guys")

let num;
num = 8;
console.log(num);

const name = "Evgeniy";
console.log(name)

num = 88;
console.log(num);

let num_1 = 5
let num_2 = 15
let res = num_1 + num_2
console.log("Сложение: " + res)
console.log("Вычитание: " + (num_2 - num_1))

function info(word) {
    console.log(word + "!")
}

function summa(a, b) {
    let res = a + b;
    info(res);
}

summa(8, 12);

function kliapwnz(arr) {
    let klia = 0;
    for (let i = 0; i < arr.length; i++)
        klia += arr[i];

    return klia;
}

let array = [6, 8, 1]
let array_2 = [6, 8, 12]
let array_3 = [6, 8, 31]
let ress = kliapwnz(array)
console.log("Результат: " + ress);
kliapwnz(array_2)
kliapwnz(array_3)