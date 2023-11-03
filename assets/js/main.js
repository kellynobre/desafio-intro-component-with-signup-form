const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var firstName = firstname.value.trim();
  var lastName = lastname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();
  var pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (firstName === "") {
    errorFunc(firstname, "First Name cannot be empty");
  } else {
    successFunc(firstname);
  }
  if (lastName === "") {
    errorFunc(lastname, "Last Name cannot be empty");
  } else {
    successFunc(lastname);
  }
  if (email === "") {
    errorFunc(email, "Email cannot be empty");
  } else if (!emailValue.match(pattern)) {
    errorFunc(email, "Looks like this is not an email");
  } else {
    successFunc(email);
  }
  if (password === "") {
    errorFunc(password, "Password cannot be empty");
  } else {
    successFunc(password);
  }
});

function errorFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  req.className += "error";
  span.className += "error-text";
  if (req !== email) {
    req.value = " ";
  } else {
    req.style.color = "hsl(0, 100%, 74%)";
  }
}
function successFunc(req) {
  req.className += "success";
}

/* if (!lastName.value.trim()) {
    setErrorState(lastName, "Last Name cannot be empty");
  }
  if (!email.value.trim()) {
    setErrorState(email, "Email cannot be empty");
  }
  if (!!email.value.trim() && !emailRegex.test(email.value)) {
    setErrorState(email, "Looks like this is not an email");
  }
  if (!password.value) {
    setErrorState(password, "Password cannot be empty");
  }

function resetState() {
  inputs.forEach((input) => input.classList.remove("error"));
  document
    .querySelectorAll("#form .error-message")
    .forEach((message) => message.remove());
}

function setErrorState(input, message) {
  input.classList.add("error");
  input.insertAdjacentHTML("afterend", errorHTML(message));
}

function errorHTML(message) {
  return `
     <p class="error-message">
       ${message}
     </p>
     `;
}
*/
