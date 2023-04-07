let userInput = document.querySelector(".number");
let btn = document.querySelector(".btn-submit");
let display = document.querySelector(".display");

btn.addEventListener("click", function () {
  let enteredValue = userInput.value;
  for (let row = enteredValue; row >= 0; row--) {
    let stars = "";
    for (let j = 0; j <= row; j++) {
      stars += "*";
    }
    console.log(stars);
  }
});
