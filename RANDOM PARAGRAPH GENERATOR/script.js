const inputNum = document.getElementById("num-input");
const inputOpt = document.getElementById("opt-input");
const genBtn = document.querySelector("#gen-btn");

let count = 0,
  options = "paras";

genBtn.addEventListener("click", () => {
  getValues();
});

function getValues() {
  count = inputNum.value;
  options = inputOpt.value;
  console.log(count);
}

async function fetchContent() {
  let response = await fetch(
    `https://baconipsum.com/api/?type=meat-and-filler&${options}=${count}&start-with-lorem=1`
  );
  let data = await response.json();
  console.log(data);
}
