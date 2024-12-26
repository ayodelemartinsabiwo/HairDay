document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#forms');
    const recCustomers = document.querySelector('#rec_customers');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (name && message) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('customer-entry');
            newDiv.innerHTML = `<p><span>"</span>${message}<span>"</span> <strong>- ${name}</strong></p>`;

            recCustomers.appendChild(newDiv);

            // Clear the form
            form.reset();

        }
    });
});
