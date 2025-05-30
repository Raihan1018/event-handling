const clickedButton = document.getElementById("clickedButton");
const message = document.getElementById("message");
const hoverDiv = document.getElementById("hoverDiv");

// console.log(clickedButton)
clickedButton.addEventListener("click", () => {
  console.log("button clicked");
  alert("hi");
  message.innerText = "Hello Developer";
});

// hover effect on div
hoverDiv.addEventListener("mouseover", () => {
  hoverDiv.style.backgroundColor = "red";
  hoverDiv.innerText = "You are hovering";
});

hoverDiv.addEventListener("mouseleave", () => {
  hoverDiv.style.backgroundColor = "lightblue";
  hoverDiv.innerText = "Hover me";
});
