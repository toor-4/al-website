// handles form submission
const form = document.querySelector("form[name='contact']");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form); // FormData a built-in JavaScript class
  await fetch("/", { method: "POST", body: data });
  window.location.href = "./thank-you.html";
});
