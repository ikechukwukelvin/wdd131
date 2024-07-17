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


// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed, units) {
    if (units === 'metric') {
        if (temperature <= 10 && windSpeed > 4.8) {
            return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
        } else {
            return 'N/A';
        }
    } else if (units === 'imperial') {
        if (temperature <= 50 && windSpeed > 3) {
            return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
        } else {
            return 'N/A';
        }
    }
}

// Static values for temperature and wind speed (example)
const temperature = 5; // Example temperature in Celsius
const windSpeed = 6; // Example wind speed in km/h
const units = 'metric'; // Example units (metric or imperial)

// Calculate windchill and display in console
const windchill = calculateWindChill(temperature, windSpeed, units);
console.log('Windchill:', windchill);

// Call functions to set current year and last modified date
setCurrentYear();
setLastModifiedDate();
