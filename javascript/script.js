const form = document.getElementById("studentForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;

    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    result.textContent = "";

    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter your full name.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (course === "") {
        document.getElementById("courseError").textContent =
            "Please select a course.";
        isValid = false;
    }

    if (!isValid) {
        result.textContent = "Please correct the errors above.";
        result.style.color = "crimson";
        return;
    }

    result.style.color = "green";
    result.textContent =
        "Registration successful! Welcome, " + name +
        ". Your selected course is " + course + ".";
});

form.addEventListener("reset", function() {
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    result.textContent = "";
});