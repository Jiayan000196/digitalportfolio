// Modal for Show More button
const showMoreButton = document.getElementById('show-more-btn');
const showMoreModal = document.getElementById('no-more-modal'); // Changed name to avoid conflict

// Select all the anchor links within the navbar
document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor click behavior
  
      // Get the target section by ID
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
  
      // Scroll to the target section with smooth behavior
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  

showMoreButton.addEventListener('click', function() {
    showMoreModal.style.display = 'flex';
});

const closeShowMoreModalButton = document.querySelector('.close-modal-btn');
closeShowMoreModalButton.addEventListener('click', function() {
    showMoreModal.style.display = 'none';
});

// Modal for Project Breakdown buttons (for multiple buttons)
const projectBreakdownButtons = document.querySelectorAll('.project-breakdown-btn'); // Select all buttons
const projectBreakdownModals = document.querySelectorAll('.popup-modal'); // Select all modals
const closeProjectBreakdownModalButtons = document.querySelectorAll('.close-btn-work'); // Select all close buttons

projectBreakdownButtons.forEach((button, index) => {
    // Open modal when the button is clicked
    button.onclick = function() {
        projectBreakdownModals[index].style.display = 'flex'; // Display the modal
    };

    // Close modal when the close button is clicked
    closeProjectBreakdownModalButtons[index].onclick = function() {
        projectBreakdownModals[index].style.display = 'none'; // Hide the modal
    };
});

window.onclick = function(event) {
    // Close modals if clicking outside
    projectBreakdownModals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

function togglePrivacyPolicy() {
    document.getElementById('privacy-policy-content').style.display = 'block';
    document.getElementById('privacy-overlay').style.display = 'block';
}

function hidePrivacyPolicy() {
    document.getElementById('privacy-policy-content').style.display = 'none';
    document.getElementById('privacy-overlay').style.display = 'none';
}

