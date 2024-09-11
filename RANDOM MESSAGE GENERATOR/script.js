const message = [
  "तेरे बिना हर दिन है अधूरा, 🌹",
  "तेरे साथ हर पल है सुहाना, ❤️",
  "तेरी हंसी में है जादू, ✨",
  "तेरे प्यार में बसी है दुनिया, 💫",
  "तेरे बिना सब कुछ है वीरान, 🥺",
  "तेरे साथ ही हर लम्हा है खास, 💖",
  "तू ही हो मेरी ज़िंदगी की खुशियाँ, 😊",
  "Without you, each day feels incomplete, 🌹",
  "With you, every moment is a delight, ❤️",
  "In your laughter lies a magic, ✨",
  "In your love is where my world resides, 💫",
  "Without you, everything seems deserted, 🥺",
  "With you, every moment is precious, 💖",
  "You are the joy of my life, 😊",
];

function generateMessage() {
     let randomIndex =  Math.floor(Math.random() * message.length);
     return message[randomIndex]; 
}
let randomMessage = generateMessage();
console.log(randomMessage);