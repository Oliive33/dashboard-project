const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".accueil-dashboard"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
//==================toggle profil================//
// const toggleProfil = document.querySelector(".toggle-switch-profil");
// const toggleButtonProfil = document.querySelector(".switch-profil");

// toggleProfil.addEventListener("click", () => {
//   toggleButtonProfil.classList.toggle("active");
// });
