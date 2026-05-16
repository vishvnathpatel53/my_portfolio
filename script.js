// ================================
// Student Portfolio - Vishvnath
// simple JavaScript file
// ================================

// --- Hamburger menu toggle (for mobile) ---
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    // If menu is open, close it. If closed, open it.
    if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
    } else {
        navLinks.classList.add("open");
    }
}

// --- Contact form submit handler ---
function handleFormSubmit(event) {
    // Stop the page from reloading
    event.preventDefault();

    // Get the values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simple check: make sure fields are not empty
    if (name == "" || email == "" || message == "") {
        alert("Please fill in all fields.");
        return;
    }

    // Show a success message
    var successMsg = document.getElementById("successMsg");
    successMsg.style.display = "block";

    // Clear the form fields
    document.getElementById("contactForm").reset();
}
