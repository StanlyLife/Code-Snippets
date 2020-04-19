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

function timeOutInSeconds(timeout) {
  return timeout * 1000;
}

function loginUser(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username.length > 3) {
        resolve({
          name: username,
          email: `${username}@gmail.com`,
          website: `${username}life.com`,
        });
      }
      reject("user does not exist");
    });
  }, timeOutInSeconds(1.5));
}

/* async function will work */
async function displayUser() {
  try {
    const user = await loginUser("stian");
    createVisuals(user.email, "lawngreen");
  } catch (err) {
    createVisuals(err);
  } finally {
    createSeparator();
  }
}
async function displayUser2() {
  try {
    const user = await loginUser("ed");
    createVisuals(user.email, "lawngreen");
  } catch (err) {
    createVisuals(err, "darkred");
  } finally {
    createSeparator();
  }
}
/* non async function will return undefined */
function displayUser3() {
  const user = loginUser("stian");
  createVisuals(user.email, "indianred");
  createSeparator();
}

displayUser();
displayUser2();
displayUser3();
