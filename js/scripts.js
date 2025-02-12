document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with the correct public key
    emailjs.init("yN8NnMcgBYxr8U0dd");

  
    const form = document.querySelector("#contact-form");
  
    if (!form) {
      console.error("❌ Form not found! Make sure #contact-form exists in the HTML.");
      return;
    }
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      const data = {
        from_name: formData.get("from_name"),
        reply_to: formData.get("reply_to"),
        message: formData.get("message"),
      };
  
      console.log("📤 Sending EmailJS Data:", data);
  
      emailjs.send("service_t9ppkfw", "template_1a676f2", data)
        .then((response) => {
          console.log("✅ Email sent successfully:", response);
          alert("Form submitted successfully!");
          form.reset();
        })
        .catch((error) => {
          console.error("❌ EmailJS Error:", error);
          alert("There was an error submitting the form. Check the console for details.");
        });
    });
  });
  