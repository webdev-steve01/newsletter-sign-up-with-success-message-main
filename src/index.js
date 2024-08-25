const form = document.getElementById("form");
const success = document.getElementById("success");
const newsLetter = document.getElementById("body");
const dismiss = document.getElementById("dismiss");
const img = document.getElementById(".img");
const error = document.getElementById("error");

const user = document.getElementById("emailValue");
form.addEventListener("submit", (e) => {
  const updateUser = document.getElementById("user");
  e.preventDefault();
  if (user.value == "") {
    // alert('put an email stupid')
    error.style.display = "block";
    user.style.border = "1px solid red";
    user.style.backgroundColor = "rgb(255, 17, 0, 25%)";
    user.addEventListener("click", () => {
      user.style.backgroundColor = "white";
      user.style.border = "1px solid grey";
    });
  } else {
    success.style.display = "grid";
    newsLetter.style.display = "none";
    updateUser.innerText = user.value;
  }
});

dismiss.addEventListener("click", (e) => {
  e.preventDefault();
  success.style.display = "none";
  newsLetter.style.display = "flex";
  error.style.display = "none";
  user.value = "";
});

