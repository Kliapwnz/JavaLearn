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
