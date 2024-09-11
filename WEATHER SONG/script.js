/*const apiKey = "";
const city = "Kolkata";
const song = document.getElementById("rain-song");

async function getWeather(apiKey, city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();
  return data;
}

function checkForRain(weatherData) {
  return weatherData.weather.some(
    (condition) => condition.main.toLowerCase() === "haze"
  );
}

function notifyAndPlaySong() {
  if (Notification.permission === "granted") {
    const notification = new Notification("It's raining!", {
      body: "Time to play your song!",
      icon: "rain_icon.png", // Optional: Add an icon image
    });
    song.play();
  }
}

async function main() {
  if (Notification.permission !== "granted") {
    await Notification.requestPermission();
  }

  const weatherData = await getWeather(apiKey, city);
  if (checkForRain(weatherData)) {
    notifyAndPlaySong();
  }

  setTimeout(main, 120000); // Check every hour
}

main();
*/
const song = document.getElementById("rain-song");

function notification() {
  if (Notification.permission === "granted") {
    const notification = new Notification("Time to play your song");
  } else if (Notification.permission === "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification("Time to play your song");
      }
    });
  }
  song.play();
}

setTimeout(notification, 120000);

notification();
