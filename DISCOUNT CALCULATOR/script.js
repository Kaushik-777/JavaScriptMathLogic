function discountRate() {
  let originalPrice = parseFloat(document.getElementById("original").value);
  let discount = parseFloat(document.getElementById("discount").value);

  if (isNaN(originalPrice) || isNaN(discount)) {
    alert("Please enter valid number.");
    return;
  }

  let discountAmt = (discount / 100) * originalPrice;
  let finalPrice = originalPrice - discountAmt;
  document.getElementById(
    "original-price"
  ).textContent = `Original Price: ${originalPrice}`;
  document.getElementById(
    "discount-amount"
  ).textContent = `Discount Amount: ${discountAmt}`;
  document.getElementById(
    "final-price"
  ).textContent = `Final Price: ${finalPrice}`;
  document.getElementById("result").style.display = "block";
}
