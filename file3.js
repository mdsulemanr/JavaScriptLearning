txt = `'Hello .' i am no one' '`;
console.log(txt);
upperTxt = txt.toUpperCase();
console.log(upperTxt)
lowerTxt = txt.toLowerCase();



let price = 1011;
const VAT = 0.231655;
let totalPrice = price * VAT;

let total = `Total price is : ${totalPrice.toFixed(2)}`;
let total2 = `Total price is : ${(price * VAT).toFixed(2)}`;
console.log(total);
console.log(total2);

let fruits = 'apple banana grapes apple';
fruits = fruits.replace('apple', 'cherry');
let fruitsArray = fruits.split(' ');
console.log(fruitsArray);

let abc = "a-b-c";
abcArray = abc.split("-"); // ["a", "b", "c"]
console.log(abcArray);

story = 'There was a lion. The lion was hungry. The lion was looking for food.';
story = story.replaceAll('lion', 'tiger'); 
console.log(story);
fname = 'Muhammad';
middleName = 'Ali';
lname = 'Khan';
fullName = fname.concat(' ', middleName, ' ', lname);
console.log(fullName);

junkTxt = 'bla';
junkTxt = junkTxt.repeat(5);
console.log(junkTxt);

console.log(fruits.indexOf('grapes'));
console.log(fruits.at(2));