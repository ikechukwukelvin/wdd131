document.addEventListener('DOMContentLoaded', function() {
    // Calculate wind chill and update DOM if conditions are met
    const temperature = 28; // Static temperature in Celsius
    const windSpeed = 10; // Static wind speed in km/h
    const windChillElement = document.getElementById('windChill');

    function calculateWindChill(temp, wind) {
        const windChill = (temp <= 10 && wind > 4.8) ?
            Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)) :
            'N/A';
        return windChill;
    }

    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = (windChill !== 'N/A') ? `${windChill} °C` : 'N/A';

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
});

