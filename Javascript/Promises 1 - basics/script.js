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

//#region regular callback
function login(user, password) {
  if (user === "userName" && password === "password1") {
    return "Logged in with regular callback";
  } else {
    return "wrong credentials";
  }
}

function getUsername(callback) {
  setTimeout(() => {
    callback("userName");
  }, 1000);
}
function getPassword(callback) {
  setTimeout(() => {
    callback("password1");
  }, 1000);
}

getUsername((name) => {
  getPassword((pass) => {
    createVisuals(login(name, pass));
  });
});

//#endregion regular callback

//#region promise

/*
promise is an object that gives back result or failure of async operation
resolve = success
reject = failure
*/
const loginPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    /* If we comment out resolve we will get an error */
    resolve("hello from promise");
    reject(new Error("login failed"));
  }, 1000);
});

loginPromise
  .then((loginPromiseResolve) => {
    createVisuals(loginPromiseResolve);
  })
  .catch((err) => {
    createVisuals(err, "indianred");
  });

//#endregion promise

function loginWithPromise(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "gilfoyle" && password === "password666") {
        resolve("Welcome gilfoyle!");
      }
      reject("invalid credentials");
    }, 1500);
  });
}

function getUserNameAndPassword() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["gilfoyle", "password666"]);
      reject(["dinesh", "securepassword"]);
    }, 2000);
  });
}

/* Creates error as credentials are invalid */

loginWithPromise("dinesh", "securepassword")
  .then((login) => {
    createVisuals(login, "lime");
  })
  .catch((err) => createVisuals(err, "indianred"));

/* works */

loginWithPromise("gilfoyle", "password666")
  .then((login) => {
    createVisuals(login, "lime");
  })
  .catch((err) => createVisuals(err, "indianred"));

/* also works */
getUserNameAndPassword().then((credentials) => {
  loginWithPromise(credentials[0], credentials[1]).then((result) =>
    createVisuals(result, "cyan")
  );
});
