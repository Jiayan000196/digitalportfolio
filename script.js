// Get modal and button
const showMoreButton = document.getElementById('show-more-btn');
const modal = document.getElementById('no-more-modal');

// Show modal when "Show More" button is clicked
showMoreButton.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// Close the modal when clicking the "Go back to Work" button
const closeModalButton = document.querySelector('.close-modal-btn');
closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});
