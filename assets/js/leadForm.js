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
