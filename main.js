let btn = document.querySelectorAll(".numbers button");
let out = document.getElementById("output");
let sub = document.getElementById("submit");

window.onload = function () {
  sessionStorage.clear();
};

btn.forEach((el) => {
  el.addEventListener("click", (e) => {
    btn.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    window.sessionStorage.setItem("rating", e.currentTarget.value);
	  out.textContent = window.sessionStorage.getItem("rating");
  });
});

document.addEventListener("click", function () {
  if (sessionStorage.getItem("rating") !== null) {
    sub.addEventListener("click", function () {
      document.getElementsByClassName("rating")[0].classList.add("del");
      document.getElementsByClassName("thanks")[0].classList.add("act");
    });
  }
});
