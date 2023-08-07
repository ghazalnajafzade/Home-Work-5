let userObjet = [];
let userInput;
while (true) {
  userInput = prompt("Enter Your Name And Age (with ,):");
  if (userInput == null || userInput == "") {
    break;
  }
  userInput = userInput.split(",");

  userObjet.push({ name: userInput[0], age: userInput[1] });
}

userObjet.sort((a, b) => a.age - b.age);
console.log(userObjet);
