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
