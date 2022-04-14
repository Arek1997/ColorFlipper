const btn = document.querySelector(".button");
let value = document.querySelector(".value");

const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const random = function () {
  return Math.trunc(Math.random() * hexArray.length);
};

btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexArray[random()];
  }
  value.textContent = hex;
  document.body.style.backgroundColor = hex;
});
