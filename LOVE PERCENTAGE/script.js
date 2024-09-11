
 var loveCalculator = function () {
  var yourName = document.getElementById("firstname").value;
  var loversName = document.getElementById("lovername").value;
  var loveScore = Math.random() * 100 + 1;
  var loveFinal = Math.round(loveScore);
  if (yourName === "") {
    alert("please enter your name");
  } else if (loversName === "") {
    alert("Please enter your lovers name");
  }
  else {
    document.getElementById("lovefinal").innerHTML = `${yourName} and ${loversName} your love percentage is ${loveFinal}%`;
  }
};

function resetFunction() {
  location.reload();
}
