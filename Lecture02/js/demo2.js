var height = parseFloat(prompt("Insert your height (cm):"));
var weight = parseInt(prompt("Insert your weight (kg):"));
// Compare parseInt with parseFloat for float inputs

if (typeof height != Number || typeof weight != Number) {
  console.log("Invalid input!");
}

height = height/100;  // To convert cm to m
const formula = weight/(height*height);

let result = `Your BMI is ${formula}`;
// alternatively: let result = 'Your BMI is ' + formula;

if (formula < 18.5) {
  console.log(result + "\nYou are underweight");
} else if (formula >= 18.5 && formula < 24.9) {
  console.log(result + "\nYou have a normal weight");
} else if (formula >= 25 && formula < 29.9) {
  console.log(result + "\nYou are overwright");
} else if (formula >= 30) {
  console.log(result + "\nYou are obese");
}
