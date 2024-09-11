
const dataInput = document.querySelector("input");
const pElement = document.querySelector("p");

dataInput.addEventListener("change", () => {
    const birthDate = new Date(dataInput.value);
    const currentDate = new Date();
    const newDate = new Date(currentDate - birthDate);

    const years = newDate.getFullYear() - 1970;
    const months = newDate.getMonth();
    const days = newDate.getDate() - 1;

    pElement.innerHTML = `You're ${years} years ${months} months ${days} days old.`;
});