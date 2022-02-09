const formEl = document.querySelector("form");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const movie = document.getElementById("movie");
const numberOfCards = document.getElementById("numberOfCards");

const ToggleBtn = document.querySelector(".hamburger");
const sideNav = document.querySelector(".sideNav");

const radioBtn = document.querySelectorAll("input[name='time']");

console.log(radioBtn);

let timeSelectValue = null;

radioBtn.forEach((radioBtn) =>
  radioBtn.addEventListener("click", (e) => {
    timeSelectValue = e.target.id;
  })
);

ToggleBtn.addEventListener("click", () => {
  console.log("Active");
  ToggleBtn.classList.toggle("active");
  sideNav.classList.toggle("sideNav-active");
});

const checkEmail = (input) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value.trim())) {
    alert("Email nije validan");
  }
};

const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      console.log(input.placeholder);
      alert(`${input.placeholder} je obavezan`);
    }
  });
};

const checkNumOfCards = (input) => {
  if (input.value < 1) {
    alert(`${input.placeholder} mora biti veci od 0`);
  }
};

//Event Listeners
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([email, phone, movie, numberOfCards]);
  checkNumOfCards(numberOfCards);

  if (!timeSelectValue) {
    alert("Molim vas izaberite vreme");
  }

  checkEmail(email);
});
