const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Агов! Усі поля, будь ласка :)");
  }

  //console.log(`Email: ${email.value}, Password: ${password.value}`);
  console.log(event.currentTarget.elements);
  event.currentTarget.reset();
});
