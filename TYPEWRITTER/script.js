document.addEventListener("DOMContentLoaded", function() {
    const txt = "Hello, this is a typewritter effect";
    const speed = 100;

    let index = 0;

    function typeWritter() {
        if(index < txt.length) {
            document.getElementById("typewritter").innerHTML += txt.charAt(index);
            index++;
            setTimeout(typeWritter, speed);
        }
    }


    typeWritter();
})