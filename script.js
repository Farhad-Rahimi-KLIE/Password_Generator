const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "?@$%^&*()_+*+/<>{[]";

//Selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

function getRandomdata(dataset) {
  return dataset[Math.floor(Math.random() * dataset.length)];
}
function generatePassword(password = "") {
  if (upperInput.checked) {
    password += getRandomdata(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomdata(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomdata(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomdata(symbolSet);
  }
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }
  passBox.innerText = truncateString(password, totalChar.value);
}
generatePassword();

document.getElementById("btn").addEventListener("click", () => {
  generatePassword();
});

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
