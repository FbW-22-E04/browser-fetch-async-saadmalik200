import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");
// const button = document.querySelector("btn:hover");

const asyncFunc = async () => {
  let result = await promiseOfModal;

  console.log("User has been on the page for 60 seconds");
  result.style.display = "block";
};
let promiseOfModal = new Promise(function (resolve) {
  window.setTimeout(function () {
    resolve(modal);
  }, 1000 * 14);
});

asyncFunc();

// promiseOfModal.then(function (val) {
//   console.log("User has been on the page for 60 seconds");
//   val.style.display = "block";
// });

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});

//animation end
const continueButton = document.getElementById("continue");
continueButton.addEventListener("mouseover", () => {
  onAnimationComplete();
});

async function onAnimationComplete() {
  const buttonAnimationEnd = await onAnimationStart(continueButton);
  buttonAnimationEnd.classList.add("btn-info");
  alert("Continue to subscription!");
}

function onAnimationStart(elem) {
  return new Promise((resolve) => {
    elem.addEventListener("animationend", () => {
      resolve(elem);
    });
  });
}
