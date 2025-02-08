document.addEventListener("DOMContentLoaded", function () {
    updateFooterDates();
    updateWindChill();
});

function updateFooterDates() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
}

function updateWindChill() {
    const temperature = 30; // Temperature in Fahrenheit
    const windSpeed = 10;   // Wind speed in mph

    const windChillElement = document.getElementById("windChill");
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
}

function calculateWindChill(temp, wind) {
    if (temp <= 50 && wind > 3) {
        return (35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16)).toFixed(1) + " °F";
    } else {
        return "N/A";
    }
}