/*
- AJAX
- Asynchronous Javascript And Xml
- "used for dynamic data (get- & post-request)"
*/

// #region IGNORE
function createVisuals(item, color) {
  const itemDiv = document.createElement("div");
  const itemH1 = document.createElement("h1");
  itemH1.innerText = item;
  if (color !== null) {
    itemDiv.style.background = color;
  }
  itemDiv.appendChild(itemH1);
  document.body.appendChild(itemDiv);
}

function createSeparator() {
  const separator = document.createElement("hr");
  document.body.appendChild(separator);
}
// #endregion

//#region  synchronous JS

createVisuals("START synchronous");
createVisuals("functionallity synchronous");
createVisuals("END synchronous");

createSeparator();
//#endregion Synchronous JS

//#region  Async JS

createVisuals("START Async");

function loginUserDinesh() {
  setTimeout(() => {
    return "Dinesh";
  }, 1000);
}

function loginUserGilfoyle(callback) {
  setTimeout(() => {
    callback({ username: "Gilfoyle" });
  }, 1000);
}

function loginPasswordGilfoyle(callback) {
  setTimeout(() => {
    callback("password666");
  }, 1200);
}

/*  Dinesh will return undefined */
createVisuals(loginUserDinesh(), "indianred");

/*  Gilfoyle will return gilfoyle as we use a callback function */
/*  Callback function is a function that is passed in a parameter   */
const user = loginUserGilfoyle((myUser) => {
  createVisuals(myUser.username, "cyan");
  loginPasswordGilfoyle((pass) => {
    /* username can also be called inside another function */
    createVisuals(myUser.username, "#2dbd54");
    createVisuals(pass, "#2dbd54");
    /* large stacks of functions are refeered to as "callback hell" */
  });
});

createVisuals("END Async");
//#endregion Async JS
