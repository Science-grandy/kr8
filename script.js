document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const fields = form.querySelectorAll('.form-control, .form-select, textarea');
  const submitBtn = document.getElementById('submit-btn');

  fields.forEach(field => {
    // Add 'touched' class when the field loses focus
    field.addEventListener('blur', function () {
      this.classList.add('touched');
    });

    // Placeholder animation on input or select changes
    field.addEventListener('input', function () {
      if (this.value) {
        this.nextElementSibling.classList.add('active');
      } else {
        this.nextElementSibling.classList.remove('active');
      }

      // If valid, remove 'touched' class
      if (this.checkValidity()) {
        this.classList.remove('touched');
      }
    });
  });

  // Form submit behavior and validation
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check all fields for validity
    let formIsValid = true;
    fields.forEach(field => {
      if (!field.checkValidity()) {
        field.classList.add('touched');
        formIsValid = false;
      }
    });

    if (formIsValid) {
      // If form is valid, simulate form submission
      submitBtn.classList.add('requesting');
      submitBtn.textContent = 'Requesting Quote...';

      setTimeout(() => {
        submitBtn.classList.remove('requesting');
        submitBtn.textContent = 'Request Quote';
        // alert('Form submitted successfully!');
      }, 2000);
    }
  });
});

document.getElementById('submit-btn').addEventListener('click', function (e) {
  // Get all checkboxes inside the checkbox group
  var checkboxes = document.querySelectorAll('input[name="service"]');
  var isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

  // If no checkbox is selected, prevent form submission
  if (!isChecked) {
    e.preventDefault(); // Prevent the form from submitting
    checkboxes[0].parentElement.classList.add('was-validated');
    document.querySelector('.checkbox-err-msg').innerText = '(Select atleast one service)'
  } else {
    document.querySelector('.checkbox-err-msg').innerText = ''
    // If at least one checkbox is checked, remove error styling if applied
  }
});

