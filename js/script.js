(function () {
  emailjs.init("eRblkefiacedFO21V"); // from EmailJS dashboard
})();

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload

  emailjs.sendForm(
    "service_fycz738",
    "template_80ootxq",
    form
  )
  .then(() => {
    alert("Message sent!");
  })
  .catch((error) => {
    console.log(error);
    alert("Failed to send.");
  });
});