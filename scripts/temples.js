// Hamburger menu functionality
const navIcon = document.getElementById('nav-icon');
const navList = document.querySelector('nav ul');

navIcon.addEventListener('click', () => {
    navList.classList.toggle('show');
    navIcon.classList.toggle('open');
});

// Display last modified date in footer
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
}

// Function to get last modified date and set it in the paragraph element
function setLastModified() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last modified: " + lastModified;
}

// Call the functions to set current year and last modified date when the page loads
window.onload = function() {
    setCurrentYear();
    setLastModified();
};