const inputNameRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");

inputNameRef.addEventListener("input", (e) => {
  outputNameRef.textContent = e.target.value;
  if (e.target.value === "") {
    outputNameRef.textContent = "незнакомец";
  }
});
