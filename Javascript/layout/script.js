// #region IGNORE
function createVisuals(item) {
  const itemDiv = document.createElement("div");
  const itemH1 = document.createElement("h1");
  itemH1.innerText = item;
  itemDiv.appendChild(itemH1);
  document.body.appendChild(itemDiv);
}

function createSeparator() {
  const separator = document.createElement("hr");
  document.body.appendChild(separator);
}
// #endregion
