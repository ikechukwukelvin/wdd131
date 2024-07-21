// Product array data (simulating external data source)
const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
];

// Function to populate product options in the select element
function populateProductOptions() {
    const select = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.textContent = product.name;
        option.value = product.id;
        select.appendChild(option);
    });
}

// Execute function to populate options on page load
document.addEventListener('DOMContentLoaded', function() {
    populateProductOptions();
});

// Counter using localStorage
function incrementReviewCounter() {
    let count = localStorage.getItem('reviewCount');
    if (!count) {
        count = 0;
    }
    count++;
    localStorage.setItem('reviewCount', count);
}

// Event listener for form submission
const form = document.getElementById('reviewForm');
form.addEventListener('submit', function(event) {
    // Increment review counter on successful form submission
    incrementReviewCounter();
});

// Function to get current year and set it in the span element
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



