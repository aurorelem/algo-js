let min = prompt("Please enter a minimum number");
let max = prompt("Please enter a maximumn number");
let current = prompt("Please enter a other number");


if ((current >= min) && (current <= max)) {
console.log(current);
}

else if (min > max) {
    console.log("error message: there is a problem");
}