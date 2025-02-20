document.addEventListener("DOMContentLoaded", () => {
    // Highlight the active navigation link
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Handle form validation on the Contact page
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const errorMessage = document.getElementById("error-message");

            if (name === "" || email === "" || message === "") {
                event.preventDefault();
                errorMessage.textContent = "All fields are required.";
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.display = "none";
                localStorage.setItem("lastSubmitted", new Date().toISOString());
            }
        });
    }

    // Show last submission time if available
    const lastSubmission = localStorage.getItem("lastSubmitted");
    if (lastSubmission) {
        const lastSubmissionDisplay = document.getElementById("last-submission");
        if (lastSubmissionDisplay) {
            lastSubmissionDisplay.textContent = `Last message submitted on: ${new Date(lastSubmission).toLocaleString()}`;
        }
    }
});
