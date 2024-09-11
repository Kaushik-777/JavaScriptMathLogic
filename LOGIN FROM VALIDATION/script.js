const form = document.querySelector("form"),
  eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault();
  if (eInput.value == "") {
    eField.classList.add("shake", "error");
  } else {
    checkEmail();
  }
  if (eInput.value == "") {
    pField.classList.add("shake", "error");
  }

  setTimeout(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = (e) => {
    checkEmail();
  };

  function checkEmail() {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!eInput.value.match(pattern)) {
      eField.classList.add("error");
      let errorText = eField.querySelector(".error-text");
      eInput.value != ""
        ? (errorText.innerText = "Enter a valid email address")
        : (errorText.innerText = "Email can't be blak");
    } else {
      eField.classList.remove("error");
    }
  }

  pInput.onkeyup = (e) => {
    if (pInput.value == "") {
      pField.classList.add("error");
    } else {
      pField.classList.remove("error");
    }
  };

  if (
    !eField.classList.contains("error") &&
    !pField.classList.contains("error")
  ) {
    window.location.href = "#";
    alert("Form Submitted");
  }
};
