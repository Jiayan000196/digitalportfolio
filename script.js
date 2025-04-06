// Modal for Show More button
const showMoreButton = document.getElementById('show-more-btn');
const showMoreModal = document.getElementById('no-more-modal'); // Changed name to avoid conflict

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
const closeProjectBreakdownModalButtons = document.querySelectorAll('.close-btn'); // Select all close buttons

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

// Privacy policy functions
function togglePrivacyPolicy() {
    var privacyContent = document.getElementById('privacy-policy-content');
    privacyContent.style.display = 'block';
}

function hidePrivacyPolicy() {
    var privacyContent = document.getElementById('privacy-policy-content');
    privacyContent.style.display = 'none';
}

// Smooth Scrolling
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
