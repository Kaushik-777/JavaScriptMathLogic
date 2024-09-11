function calculateInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    console.log(principal);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    console.log(rate);
    const years = parseInt(document.getElementById("years").value);
    console.log(years);
  
    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
      alert("Please enter valid numbers in all fields.");
      return;
    }
   
  const interest = (principal * rate * years);
  document.querySelector("#interest").textContent = `Result: ${interest.toFixed(2)}`;
  document.querySelector("#interest").style.display = "block";
}