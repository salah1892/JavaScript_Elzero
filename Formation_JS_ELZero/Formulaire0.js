let userInput = document.querySelector("[name='userName']");
let ageInput = document.querySelector("[name='age']");
// console.log(userInput);
// console.log(ageInput);
document.forms[0].onsubmit = function (e) {
  let userValide = false;
  let AgeValide = false;
//   console.log(userInput.value);
//   console.log(userInput.value.length);

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValide = true;
    console.log("valide Name");
  }
  if (ageInput.value !== "" && ageInput.value > 0) {
    AgeValide = true;
    console.log("valide Age");
    
  }
  if (userValide === false || AgeValide === false) {
    e.preventDefault();
  }
};
document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};
