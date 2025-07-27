const container = document.querySelector("#container");

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  let size = prompt("Enter grid size(number of boxes) per side (max 100): ");
  size = parseInt(size);

  if(isNaN(size) || size < 1 || size > 100){
    alert("Please enter a number between 1 and 100");
    return;
  }

  container.innerHTML = "";

  const containerSize = 960;
  const squareSize = containerSize / size;

  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  for(let i = 0; i < size * size; i++){
    const square = document.createElement("div");
    square.classList.add("gridSquares");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    container.appendChild(square);
  }

});




