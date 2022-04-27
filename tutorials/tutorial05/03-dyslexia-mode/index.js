/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dysToggle = () => {
  var body = document.querySelector("body");
  if (body.classList.contains("dyslexia-mode")) {
    body.classList.remove("dyslexia-mode");
  } else{
    body.classList.add("dyslexia-mode");
  }
};
document.querySelector("#dyslexia-toggle").addEventListener("click", dysToggle)