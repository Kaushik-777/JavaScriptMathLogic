var i = 0;
var txt1 =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, accusantium libero hic excepturi esse impedit nam pariatur suscipit enim quaerat minima illo velit dolor, quidem repudiandae placeat! Consequatur dignissimos dolor dicta consectetur deleniti sint porro possimus natus? Nemo, voluptas! Veniam voluptatum exercitationem explicabo corrupti quaerat doloribus, velit repellendus fuga aspernatur consectetur placeat sunt deserunt consequatur reiciendis expedita alias aperiam delectus cum rerum est reprehenderit, facilis totam vero vel? Officiis, nisi fugit. Quisquam, accusantium dolorem odit minus enim porro similique dicta inventore aperiam. Animi quam at repellat totam dolor laborum modi beatae nisi ipsa ex. Inventore excepturi est commodi aliquid reiciendis.";
var speed = 100;
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
