let form = document.querySelector("#form");
let submit = document.querySelector("#submit");
let toast = document.querySelector("#toast");
let bgcInput = document.querySelector("#bgc-input");
console.log(toast);

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form).entries());
  console.log(formData);
  let topOrBottom = formData.topOrBottom;
  console.log(topOrBottom);
  let leftOrRight = formData.leftOrRight;
  console.log(leftOrRight);
  console.log(topOrBottom == "top");
  toast.style.fontSize = "40px";
  if (topOrBottom == "top") {
    toast.style.top = "10px";
    toast.style.bottom = "";
  } else {
    toast.style.bottom = "10px";
    toast.style.top = "";
  }
  if (leftOrRight === "left") {
    toast.style.left = "10px";
    toast.style.right = "";
  } else {
    toast.style.right = "10px";
    toast.style.left = "";
  }
  toast.textContent = formData.Message;
});
