let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let numbers = [1, 2, 3, 4, 5, 11, 0, -55, 'cherry', true, false, null, undefined];

console.log(cars.length); // Output: 6
console.log(numbers.length); // Output: 13

console.log(cars[5]); // Output: "Audi"
console.log(cars.slice(1, 4)); // Output: ["Volvo", "Saab", "Ford"]
console.log(cars.sort()); // Output: ["Audi", "BMW", "Fiat", "Ford", "Saab", "Volvo"]
console.log(cars.reverse()); // Output: ["Volvo", "Saab", "Ford", "Fiat", "BMW", "Audi"]
console.log(cars.indexOf("Fiat")); // Output: 3
console.log(cars.includes("BMW")); // Output: true
console.log(cars.find(car => car.startsWith("S"))); // Output: "Saab"
console.log(cars.pop()); // Output: "Audi"
console.log(cars); // Output: ["Volvo", "Saab", "Ford", "Fiat", "BMW"]
console.log(cars.push("Mercedes")); // Output: 6
console.log(cars); // Output: ["Volvo", "Saab", "Ford", "Fiat", "BMW", "Mercedes"]
console.log(cars.shift()); // Output: "Volvo"
console.log(cars); // Output: ["Saab", "Ford", "Fiat", "BMW", "Mercedes"]
console.log(cars.unshift("Toyota")); // Output: 6
console.log(cars); // Output: ["Toyota", "Saab", "Ford", "Fiat", "BMW", "Mercedes"]

for (let i = 0; i < cars.length; i++) {
    if (cars[i] === "Ford") {
        continue; // Skip the rest of the loop for "Ford"
    }
    console.log(cars[i]);

    if (cars[i] === "BMW") {
        break; // Exit the loop when "BMW" is found
    }
}