const BASE_URL = "http://localhost:3000";

const weatherForm = document.querySelector("form");
const searchInput = document.querySelector("input");
const messageOne = document.getElementById("message-one");
const messageTwo = document.getElementById("message-two");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchInput.value;
  const url = `${BASE_URL}/weather?address=${location}`;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    })
    .catch(console.error);
});
