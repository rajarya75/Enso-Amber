document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  const fullName = document.getElementById("fullname").value;
  const phoneNumber = document.getElementById("phonenumber").value;
  const email = document.getElementById("email").value;
  const enquiryType = document.getElementById("enquiry").value;
  const message = document.getElementById("message").value;

  const data = {
    name: fullName,
    email: email,
    mobileCode: "+971", // Assuming this is static
    contactNumber: phoneNumber,
    message: message,
    typeOfEnquiry: enquiryType,
    from: "Contact Us",
  };

  fetch("https://betaapi.enso.inc/api/website/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // On success, hide the form and show the success message
      document.getElementById("contactForm").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
    })
    .catch((error) => {
      // Handle error - maybe show an error message
      console.error("Error:", error);
    });
});

// Download Brochure===================================================================
document
  .getElementById("brochureForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Gather form data
    const formData = {
      name: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      mobileCode: "+971", // Adjust if mobile code is dynamic
      contactNumber: document.getElementById("phonenumber").value,
      message: document.getElementById("message").value,
      typeOfEnquiry: document.getElementById("enquiry").value,
      from: "Contact Us",
    };

    // Send data to API
    fetch("https://betaapi.enso.inc/api/website/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Adjust based on your API response
          // Hide form and open thank you modal
          document.getElementById("brochureForm").style.display = "none";
          new bootstrap.Modal(document.getElementById("thankYouModal")).show();

          // Trigger PDF download
          window.location.href = "/path/to/your/brochure.pdf";
        } else {
          alert("There was an issue with your submission. Please try again.");
        }
      })
      .catch((error) => console.error("Error:", error));
  });
