document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('new_user_form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form); // Create a FormData object from the form

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest' // Indicate that it's an AJAX request
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // Parse JSON response
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      // Handle success (e.g., redirect or update the UI)
      window.location.href = `/users/${data.id}`; // Redirect to the user's show page
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  });
});