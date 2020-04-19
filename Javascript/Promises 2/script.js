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

const timeOutSeconds = 1000;

function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "gilfoyle" && password === "password666") {
        resolve({ user: "NotDinesh", email: "Gilfoyle666@piedpiper.com" });
      }
      reject("error");
    }, timeOutSeconds);
  });
}

createVisuals(login("gilfoyle", "password666").user, "indianred");
createSeparator();
login("gilfoyle", "password666").then((success) => {
  createVisuals(success.user, "goldenrod");
  createVisuals(success.email, "goldenrod");
  createSeparator();
});

const youtube = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      favorites: ["bitcoin alert", "netsec 502", "how to have friend as boss"],
    });
  }, timeOutSeconds);
});

const twitch = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      favorites: ["24/7 code", "cloud computing", "bird's nest egg watch"],
    });
  }, timeOutSeconds);
});

Promise.all([twitch, youtube]).then((result) => {
  result.forEach((x) => {
    x.favorites.forEach((item) => createVisuals(item, "teal"));
    createSeparator();
  });
});

Promise.all([youtube, twitch]).then((result) => console.log(result));
