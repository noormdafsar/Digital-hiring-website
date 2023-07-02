// Get the form element
const contactForm = document.querySelector('#form');

// Add event listener to the form submit event
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  
  // Get the form input values
  const name = contactForm.querySelector('input[name="name"]').value;
  const email = contactForm.querySelector('input[name="email"]').value;
  const message = contactForm.querySelector('textarea[name="message"]').value;
  
  // Perform form validation
  if (!name || !email || !message) {
    alert('Please fill in all the fields');
    return;
  }
  
  // Perform further processing (e.g., AJAX request or form submission)
  // Replace the code below with your own logic
  
  // Display success message
  alert('Message sent successfully!');
  
  // Reset the form
  contactForm.reset();
});

