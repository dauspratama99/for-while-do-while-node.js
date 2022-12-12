// variable

// var

var greater = "hay hay";
var greater = "hay hallo";

console.log(greater);

//let 

let greater2 = "hay hay";
let status = true;
if (status = true) {
    let greater2 = "hay hallo";
}
    console.log(greater2);

// const
// const greater3;
// console.log(greater3);

//flow for
let angka = "";
for ( let i = 0; i <=9; i++){
    angka = angka + i;
}
console.log(angka);

//flow while
let angka2 = "";
while (angka2 <= 9){
    angka2++;
    console.log(angka2);
}


//flow dowhile
let angka3 = "";
let i = 0;

do {
    i = i+1;
    angka3 = angka3 + i;
} while (i <= 9);

console.log(angka3);

function testNum(a){
    let angka3 ;

    if (a > 0){
        angka3 = "positif";
    } else {
        angka3 = "negatif";
    }
    return angka3;
}

console.log(testNum(5));

// inisiasi array
let fruits = ["banana", "manggo", "pepaya"];

if (fruits.length > 0){
    console.log(fruits);
}else{
    console.log("data tidak ada");
}

//tambah data array menggunakan function

// push, tambah data di akhir
let addFruits1 = fruits.push("jeruk");
console.log(fruits);

// unshift, tambah data di awal
let addFruits2 = fruits.unshift("jeruk");
console.log(fruits);

// pop, hapus data di akhir
let deleteFruits1 = fruits.pop();
console.log(fruits);

// shift, hapus data di akhir
let deleteFruits2 = fruits.shift();
console.log(fruits);






