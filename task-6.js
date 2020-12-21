const inputRef = document.querySelector("#validation-input");
const lengthValue = inputRef.getAttribute('data-length')

const validation = () => {
  if (inputRef.value.length === lengthValue) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", (event) => validation());

console.log(lengthValue)