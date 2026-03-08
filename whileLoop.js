// let i = 1;

// while (i < 11) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }

let num = 1;
while (true) {
    console.log("This loop will run forever!");
    console.log("To stop it, you can use Ctrl + C in the terminal.");
    num ++;
    if (num === 5) {
    break; // This will exit the loop immediately
    }
}