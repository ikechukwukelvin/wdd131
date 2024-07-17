// Products array (provided)
const products = [
    {
        id: 'fc-1888',
        name: 'flux capacitor',
        avgRating: 4.5
    },
    {
        id: 'fc-2050',
        name: 'power laces',
        avgRating: 4.7
    },
    {
        id: 'fs-1987',
        name: 'time circuits',
        avgRating: 3.5
    },
    {
        id: 'ac-2000',
        name: 'low voltage reactor',
        avgRating: 3.9
    },
    {
        id: 'jj-1969',
        name: 'warp equalizer',
        avgRating: 5.0
    }
];

// Function to populate product options in the select element
function populateProductOptions() {
    const select = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

// Function to update review counter in localStorage
function updateReviewCounter() {
    let reviewsCount = localStorage.getItem('reviewsCount') || 0;
    reviewsCount = parseInt(reviewsCount) + 1;
    localStorage.setItem('reviewsCount', reviewsCount);
}

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


// Event listener for form submission to update review count
const form = document.querySelector('form');
form.addEventListener('submit', updateReviewCounter);
