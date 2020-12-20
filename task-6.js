const inputRef = document.querySelector("#validation-input");

const validation = () => {
  if (inputRef.value.length === 6) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", (event) => validation());
