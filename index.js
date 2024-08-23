const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const numbers = "1234567890";
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function onclck() {
  const valueEmail = email.value;
  if (valueEmail.includes("@") === false) {
    alert("We need '@'");
    return false;
  }
  return true;
}
function onclck2() {
  const valuePhone = phone.value;
  for (let i = 0; i < valuePhone.length; i++) {
    if (numbers.includes(valuePhone[i]) === false) {
      alert("Only numbers!");
      break;
    }
  }
  if (valuePhone.length !== 8) {
    alert("Invalid phone number!");
    return false;
  }
  return true;
}
function onclck3() {
  const valuePassword = password.value;
  if (valuePassword.length < 8) {
    alert("8-s ix orontoi password xiine vv!");
    return false;
  }
  return true;
}
submitButton.addEventListener("click", function () {
  const isValidEmail = onclck();
  const isValidPhone = onclck2();
  const isValidPassword = onclck3();
  if (isValidEmail && isValidPhone && isValidPassword) {
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    window.location.href = "/todolist.html";
  } else {
    alert("BURUU BAINA!!!!");
  }
});
