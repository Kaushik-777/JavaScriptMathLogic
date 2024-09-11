// Function to generate a random color in hexadecimal format
function getRandomColor() {
    // Generate a random integer between 0 and 0xFFFFFF
    const randomColor = Math.floor(Math.random() * 0xFFFFFF);
    
    // Convert the integer to a hexadecimal string and pad with leading zeros
    const hexColor = `#${randomColor.toString(16).padStart(6, '0')}`;
    
    return hexColor;
  }
  
  // Example usage
  console.log(getRandomColor());
  
  //TODO:
  // Function to generate a random color in hexadecimal format
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 0xFFFFFF);
    return `#${randomColor.toString(16).padStart(6, '0')}`;
  }
  
  // Function to generate a random gradient
  function getRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(${Math.random() * 360}deg, ${color1}, ${color2})`;
  }
  
  // Example usage
  console.log(getRandomGradient());
  