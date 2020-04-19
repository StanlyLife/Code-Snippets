// #region IGNORE
function createVisuals(item, color) {
  const itemDiv = document.createElement("div");
  const itemH1 = document.createElement("h1");

  if (color !== null) {
    itemDiv.style.background = color;
  }

  itemH1.innerText = item;
  itemDiv.appendChild(itemH1);
  document.body.appendChild(itemDiv);
}

function createSeparator() {
  const separator = document.createElement("hr");
  document.body.appendChild(separator);
}
// #endregion

url = "https://api.adviceslip.com/advice";
fetch(url).then((x) => console.log(x));

const button = document.querySelector("button");
button.addEventListener("click", () => {
  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      createVisuals(data.slip.advice, "honeydew");
    });
});
