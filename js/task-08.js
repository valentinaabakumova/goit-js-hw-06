const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Агов! Усі поля, будь ласка :)");
  }

  const mail = email.value;
  const pass = password.value;

  //console.log(`Email: ${email.value}, Password: ${password.value}`);
  console.log(mail, pass);
  event.currentTarget.reset();
});
