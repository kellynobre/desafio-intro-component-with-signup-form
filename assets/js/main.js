const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resetState();
  const [firstName, lastName, email, password] = inputs;
  if (!firstName.value.trim()) {
    setErrorState(firstName, "First Name cannot be empty");
  }
  if (!lastName.value.trim()) {
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
});

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
