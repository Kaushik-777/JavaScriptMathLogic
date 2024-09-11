const inputs = document.querySelectorAll("input"),
button = document.querySelector("button"),
mobile = document.querySelector("#mobile"),
expire = document.getElementById("expire");

let OTP = ""; // global variable
let otpLength = 4;
let expireInterval = "";

function generateOTPs(x) {

   OTP = 
   Math.floor(Math.random() * 10) +
   "" +
   Math.floor(Math.random() * 10) +
   "" +
   Math.floor(Math.random() * 10) +
   "" +
   Math.floor(Math.random() * 10);

   alert("Your OTP is: " + OTP);

    inputs[0].focus();
    expire.innerText = 30;
    expireInterval = setInterval(() => {
       expire.innerText--;
       if(expire.innerText == 0) {
        clearInterval(expireInterval);
       }
   }, 1000);
}


function clearOTPs() {
    inputs.forEach((input, index) => {
        input.value = "";
        if(index == 0) {
            input.removeAttribute("disabled");
        } if(index != 0) {
            input.setAttribute("disabled", true);
        }
        input.setAttribute("disabled", true);
    });
    clearInterval(expireInterval);
    expire.innerText = 0;
    button.setAttribute("disabled", true);
    button.classList.remove("active");
}

inputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
      const currentInput = input;
      const nextInput = input.nextElementSibling;
      const prevInput = input.previousElementSibling;

      if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
        nextInput.removeAttribute("disabled", true);
        nextInput.focus();
      }

      if(e.key === "Backspace") {
        inputs.forEach((input, index1) => {
            if(index <= index1 && prevInput) {
                input.setAttribute("disabled", true);
                prevInput.focus();
                prevInput.value = "";
            }
        });
      }

      if(!inputs[3].disabled && inputs[3].value !== "") {
        inputs[3].blur();
        button.classList.add("active");
        return;
      }
      button.classList.remove("active");
    });
  });

  window.addEventListener("load", () => {
    let x = prompt("Please enter your mobile number to verify your account");
    if(x) {
        mobile.innerText = x;
    }
    generateOTPs();
    
  })


button.addEventListener("click", () => {
    let verify = "";
    inputs.forEach((input) => {
        verify += input.value;
    });
    if(verify === OTP) {
        alert("Your account has been verified successful");
        clearOTPs();
    } else {
        alert("Your verification failed");
    }
});