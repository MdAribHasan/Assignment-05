function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)})`;
}
const colorBox = document.getElementById("random-color");
colorBox.addEventListener("click", () => {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
});