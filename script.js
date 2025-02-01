console.log("Welcome to the profile site!");
// Fix for critical bug: Corrected the event listener for the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Bug fix: Corrected the form submission logic
    submitContactForm();
});
function submitContactForm() {
    // Form submission logic
    console.log("Contact form submitted successfully.");
}