// console.log("Hello world");

// Data types

// a = 10;
// b = "10";
// c = 'ABC';
// d = 10.88;
// e = [];
// f = {};
// g = true;
// console.log(typeof(g));

// console.log(a + b);
// console.log(a+ +b);
// console.log(a * b);

// Scope Demo
// b = 30;

// var, let, const
// const c = "Trupti"; // constant variable

// let a = "abc";
// a = "hello"
// console.log(a);

// {
//     console.log(b)
//     let y = 230;
//     var x = 10;
// }

// console.log(x)
// // console.log(y) // this gives error since let keywords is inside block scope

// function abc() {
//     {
//         var d = "Trupti"
//     }
//     e = "Balbudhe"
//     console.log(x)
//     console.log("d: " + d);
// }

// abc()
// console.log(e) // this will work because e is in global scope
// // console.log(d) // d is not defined since var has function scope

// Fuctions

// function abc() {
//     console.log("abc function called");
// }

// abc();

// self calling function
// (function xyz(a) {
//     console.log("hello from xyz a:", 5)
// })(5);

let abc = function (a) {
    console.log("abc function called 1: ", a)
} 

abc = function () {
    a = arguments;
    console.log(a);
    console.log("abc fuction called 2:")
}

abc(5, 6)

const calc = (i, j) => i + j
console.log(calc(5, 8))

// Arrays
const names = ["Trupti", "Balbudeh", "Shweta"] // array reference is constant not values
names[1] = "Sanika"
names.forEach((value, index, array) => console.log(value, index, array))

d = new Date();
console.log(d.getTime())
console.log(d.toDateString())

console.log(Number.MAX_VALUE)