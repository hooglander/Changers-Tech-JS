var weight = parseInt(prompt("Insert your weight (kg):"));
var height = parseInt(prompt("Insert your height (cm):"));

if (typeof weight != Number || typeof height != Number) {
  console.log("Invalid input!");
}

height = height/100;
// const formula = weight/(height*height)
const formula = weight/(Math.pow(height, 2));
let result = 'Your BMI is ' + formula.toFixed(2);
// console.log(result);

if (formula < 18.5) {
  console.log(result + "\nYou are underweight")
} else if (formula >= 18.5 && formula < 24.9) {
  console.log(result + "\nYou have a normal weight")
} else if (formula >= 25 && formula < 29.9) {
  console.log(result + "\nYou are overwright")
} else if (formula >= 30) {
  console.log(result + "\nYou are obese")
}
