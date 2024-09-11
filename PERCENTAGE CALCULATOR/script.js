function calculatePercentage() {
  let part = parseFloat(document.getElementById("part").value);
  let whole = parseFloat(document.getElementById("whole").value);

  if (isNaN(part) || isNaN(whole)) {
    alert("Please enter a valid number.");
    return;
  }

  let percentage = (part / whole) * 100;

  document.getElementById(
    "result"
  ).textContent = `Result: So, ${part} is ${percentage}% of ${whole}`;
  document.getElementById("result").style.display = "block";
}
