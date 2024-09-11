let btn = document.getElementById("calculate");

btn.addEventListener("click", (e) => {
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;

  if(length === '' || width === '' || height === '') {
    alert("Please fill out all dimensions.");
    return;
  }

  const lengthNum = parseFloat(length);
  const widthNum = parseFloat(width);
  const heightNum = parseFloat(height);

  const volume = lengthNum * widthNum * heightNum;
  const surfaceArea = 2 * (lengthNum * widthNum + lengthNum * heightNum + widthNum * heightNum);
  const smallestSide = Math.min(lengthNum, widthNum, heightNum);

  document.getElementById("results").innerHTML = 
  `<p><strong>Volume:</strong> ${volume} cubic units</p>
  <p><strong>Surface Area:</strong> ${surfaceArea} square units</p>
  <p><strong>Smallest Side:</strong> ${smallestSide} units</p>`
  document.getElementById("results").style.display = "block";

  e.preventDefault();
});
