let answer_1 = Number(prompt("Enter Your Age:"));
let answer_2 = prompt(" Enter movie type (regular or 3D:");
let answer_3 = prompt("Enter time of day (matinee or evening):");
let cost = 0;

switch (true) {
  case answer_1 < 10:
    cost = cost + 5;
    break;

  case answer_1 >= 10:
  case answer_1 < 65:
    cost = cost + 15;
    break;

  case answer_1 > 65:
    cost = cost + 10;
    break;
}

switch (answer_2) {
  case "3D":
    cost = cost + 5;
    break;
  case "4D":
    cost = cost + 20;
    break;
}

switch (answer_3) {
  case "evening":
    cost = cost + 5;
    break;
}

let question_1 = prompt(`your cost was: ${cost} do you have a discount card?`);
switch (question_1) {
  case "yes":
    cost = cost * 0.75;
}

alert(`Your final cost was ${cost}`);
