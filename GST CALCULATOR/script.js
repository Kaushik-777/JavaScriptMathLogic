function gstCalculate() {
    let originalPrice = parseFloat(document.getElementById('amount').value);
    let gstRate = parseFloat(document.getElementById('gst').value);

    if(isNaN(originalPrice) || isNaN(gstRate)) {
        alert("Enter a valid number.");
        return;
    }
    let gstAmount = (gstRate / 100) * originalPrice;
    let finalPrice = originalPrice + gstAmount;

    document.getElementById("original-price").innerText = `Original Price (₹): ${originalPrice}`;
    document.getElementById("gst-amt").innerText = `Gst Amount (₹): ${gstAmount}`;
    document.getElementById("final-price").innerText = `Final Price (₹): ${finalPrice}`;
    document.getElementById("result").style.display = "block";
}