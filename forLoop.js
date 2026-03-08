// for (let i = 0; i <= 10; i++) {
//     console.log(`My name is Arisha i`);
//     console.log(i);
//     console.log(i * 5);
//     console.log('i');

// }

// let total = 0;
// for (let i = 0; i <=5; i++){
//     total += i;
//     console.log(total);
// }
// console.log(total);

// for (let i = 5; i >= 0; i--){
//     console.log(i);
// }

for (let i = 1; i <= 10; i++){
    let remainder = i % 2;
    if (remainder === 0) {
        console.log(i);
    }
}

// let result = 3/2;
// console.log(result);
// let remainder = 2 % 2;
// console.log(remainder);

let startValue = 55;
let endValue = 73;
let numTable = 2.333;

for(let num = startValue ; num <= endValue; num++){
    
    console.log(num);
    console.log(`${numTable}  * ${num} = ${numTable * num}`)
}

// for (let num = 0; num <= 10; num++){
//     console.log(`2 * ${num} = ${2 * num}`);
// }

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
  text += cars[i];
}