const formRef = document.querySelector(".login-form");

const callback = (ev) => {
  ev.preventDefault();

  const form = ev.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
};

formRef.addEventListener("submit", callback);
