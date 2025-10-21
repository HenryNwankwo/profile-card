// Update current time in milliseconds
const timeElement = document.getElementById('userTime');
if (timeElement) {
  function updateTime() {
    timeElement.textContent = Date.now();
  }
  updateTime();
  setInterval(updateTime, 1000);
}

//For form validation

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (!form) return; //Skip if not on contact page
  const successMsg = document.getElementById('successMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get fields
    const name = form.querySelector('[data-testid="test-contact-name"]');
    const email = form.querySelector('[data-testid="test-contact-email"]');
    const subject = form.querySelector('[data-testid="test-contact-subject"]');
    const message = form.querySelector('[data-testid="test-contact-message"]');

    // Clear errors
    form.querySelectorAll('.error').forEach((el) => (el.textContent = ''));
    successMsg.classList.add('hidden');

    // Validation flags
    let valid = true;

    if (!name.value.trim()) {
      valid = false;
      document.querySelector(
        '[data-testid="test-contact-error-name"]'
      ).textContent = 'Name is required.';
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value)) {
      valid = false;
      document.querySelector(
        '[data-testid="test-contact-error-email"]'
      ).textContent = 'Enter a valid email address.';
    }

    if (!subject.value.trim()) {
      valid = false;
      document.querySelector(
        '[data-testid="test-contact-error-subject"]'
      ).textContent = 'Subject is required.';
    }

    if (message.value.trim().length < 10) {
      valid = false;
      document.querySelector(
        '[data-testid="test-contact-error-message"]'
      ).textContent = 'Message must be at least 10 characters.';
    }

    if (valid) {
      successMsg.classList.remove('hidden');
      form.reset();
    }
  });
});
