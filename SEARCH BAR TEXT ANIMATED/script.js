const placeholders = document.querySelectorAll(".placeholder");
let placeholderIndex = 0;

function rotatePlaceholder() {
   placeholders.forEach((placeholder, index) => {
    placeholder.classList.remove("active");
    if(index === placeholderIndex) {
        placeholder.classList.add("active");
    }
   });
   placeholderIndex = (placeholderIndex + 1) % placeholders.length;
}

setInterval(rotatePlaceholder, 3000);
rotatePlaceholder();