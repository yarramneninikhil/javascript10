const form = document.querySelector("#myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#number").value,
  };
  let val = document.querySelector("#email").value;
  localStorage.setItem(`${val}`, JSON.stringify(formData));
  let res = JSON.parse(localStorage.getItem(val));
  console.log(res);
  const el = document.querySelector(".hidden");
  el.innerText = res.email + " -" + res.name + "- " + res.phone;
  el.style.display = "block";
});
