const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event);
  const form = event.target;
  const formData = new FormData(form);

  // ✅ Convert form data to URL-encoded string
  const encoded = new URLSearchParams(formData).toString();

  console.log([...formData]);
  console.log(new URLSearchParams(formData).toString());

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encoded,
  })
    .then(() => {
      alert("Form successfully submitted!");
      form.reset(); // optional
    })
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
