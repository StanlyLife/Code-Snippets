/* deconstruct */

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

const items = ["banana", "noodles", "apples", "cheese"];
const [banana, noodle, ...rest] = items;
const moreItems = [...items, "better cheese"];

const user = {
  name: "Life",
  photos: [21, 543, 12],
  age: 22,
  analytics: {
    followers: 3,
    repos: 15,
  },
};

const { name, analytics, photos } = user;

const { followers } = user.analytics;

rest.forEach((x) => createVisuals(x));
createSeparator();

moreItems.forEach((x) => createVisuals(x));
createSeparator();

photos.forEach((x) => createVisuals(x));
createSeparator();

createVisuals(followers);
createSeparator();
