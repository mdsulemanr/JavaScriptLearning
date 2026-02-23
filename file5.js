 let allo = 'allo ka bacha';
console.log(allo);
allo = allo.trim();
console.log(allo);
console.log(allo.includes('ka'));
console.log(allo.includes('bacha'));
console.log(allo.startsWith('iam'));
console.log(allo.endsWith('kaka'));
console.log(allo.startsWith('allo'));

let price = 100;
let VAT = 0.18;
let total = `Total price is : ${price.toFixed(2)}`;
let total67 = `Total price is : ${(price * VAT).toFixed(2)}`;
console.log(total);
console.log(total67);

let fruits = 'apple banana grapes dragonfruit allo apple';
fruits = fruits.replace('apple', 'cherry');
fruits3 = fruits.replaceAll('apple','cherry');
console.log(fruits);
console.log(fruits3);

let fruitsArray = fruits.split(' , ');
let fruitsArray3 = fruits.split(' ');
console.log(fruitsArray);
console.log(fruitsArray3);
let tiger = "allo_kahllo_na";
tigerArray = tiger.split( ""); 
console.log(tiger);
console.log(tigerArray);

fname = 'Muhhammad';
mname = 'Ali';
lname = 'Khan';
fullName = fname.concat(' ', mname, ' ', lname);
console.log(fname + ' ' + mname + ' ' + lname);
console.log(fullName);