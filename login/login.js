const signInBtn = document.querySelector(".sign-in");
const form = document.querySelector("form");
const a = document.querySelector(".a-sign-in");
signInBtn.addEventListener("click", signInValidation);

function signInValidation() {
  const userName = document.querySelector("[type = text]");
  const password = document.querySelector("[type = password]");
  console.log(password);
  if (userName.value == "" && password.value == "") {
    inputsEmpty(userName, password);
  } else if (userName.value === "") {
    errorMsgUserName(userName);
  } else if (password.value === "") {
    errorMsgPassword(password);
  } else {
    fetchingAndStoringData(userName, password);
    window.open("/index.html", "_self");
  }
  // Clearing inputs after button is clicked //
  let allInputs = document.querySelectorAll("input");
  allInputs.forEach(function (input) {
    input.value = "";
  });
}

function inputsEmpty(userName, password) {
  let errorMsg = document.createElement("h4");
  errorMsg.className = "msg-error";
  let errorMsgText = document.createTextNode(
    "Please Fill IN Username And Password!"
  );
  errorMsg.append(errorMsgText);
  form.append(errorMsg);
  userName.style.borderColor = "red";
  password.style.borderColor = "red";
  setTimeout(function () {
    errorMsg.remove();
    userName.style.borderColor = "grey";
    password.style.borderColor = "grey";
  }, 1000);
}

function errorMsgUserName(userName) {
  let errorMsg = document.createElement("h4");
  errorMsg.className = "msg-error";
  let errorMsgText = document.createTextNode("Please Fill In Username!");
  errorMsg.append(errorMsgText);
  form.append(errorMsg);
  userName.style.borderColor = "red";
  setTimeout(function () {
    errorMsg.remove();
    userName.style.borderColor = "grey";
  }, 1000);
}

function errorMsgPassword(password) {
  let errorMsg = document.createElement("h4");
  errorMsg.className = "msg-error";
  let errorMsgText = document.createTextNode("Please Fill In Password!");
  errorMsg.append(errorMsgText);
  form.append(errorMsg);
  password.style.borderColor = "red";
  setTimeout(function () {
    errorMsg.remove();
    password.style.borderColor = "grey";
  }, 1000);
}

function fetchingAndStoringData(username, password) {
  sessionStorage.setItem("username", username.value);
  sessionStorage.setItem("password", password.value);
}
