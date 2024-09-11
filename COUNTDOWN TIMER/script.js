var countDownDate = new Date("Aug 08, 2024 09:011:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  document.getElementById("inner").style.opacity = "1";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("inner").style.opacity = "0";
    document.getElementById("exp").innerHTML = "HAPPY INDEPENDENCE DAY";
    gsap.from("#exp", {                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      y: 70,
      delay: 2,
      scale: 0,
      duration: 1,
    });
    gsap.to("#exp", {
      color: "#fff",
    });
  }
}, 1000);
