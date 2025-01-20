// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date dynamically
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
