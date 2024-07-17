// Product Array
const products = [
    {
        id: 'fc-1888',
        name: 'flux capacitor',
        averageRating: 4.5
    },
    {
        id: 'fc-2050',
        name: 'power laces',
        averageRating: 4.7
    },
    {
        id: 'fs-1987',
        name: 'time circuits',
        averageRating: 3.5
    },
    {
        id: 'ac-2000',
        name: 'low voltage reactor',
        averageRating: 3.9
    },
    {
        id: 'jj-1969',
        name: 'warp equalizer',
        averageRating: 5.0
    }
];

// Function to populate product options
function populateProductOptions() {
    const select = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.textContent = product.name;
        option.value = product.name;
        select.appendChild(option);
    });
}

// Function to validate form before submission
function validateForm() {
    const productName = document.getElementById('productName').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const installationDate = document.getElementById('installationDate').value;

    if (!productName || !rating || !installationDate) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Increment review counter using localStorage
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    return true;
}

// Populate product options on page load
window.onload = function() {
    populateProductOptions();
};
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