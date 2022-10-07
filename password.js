const alphabets = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const specialCharacters = "!@#$%^&*()1234567";

const options = [alphabets, numbers, specialCharacters];

let box1 = document.getElementById("Dp1");
let box2 = document.getElementById("Dp2");
let box3 = document.getElementById("Dp3");
let box4 = document.getElementById("Dp4");

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    box1.textContent = generatePassword();
    box2.textContent = generatePassword();
    box3.textContent = generatePassword();
    box4.textContent = generatePassword();
  });

function generatePassword() {
  const length = getRandomNumber(8, 15);
  let password = [];

  for (let i = 0; i < length; i++) {
    const optionsIndex = getRandomNumber(0, options.length - 1);
    const option = options[optionsIndex];
    password.push(option[getRandomNumber(0, option.length - 1)]);
  }

  return password.join("");
}

function getRandomNumber(min, max) {
  return Math.min(Math.floor(Math.random() * max + min), max);
}
