document.addEventListener("DOMContentLoaded", () => {
    const locations = [
        { name: "Pyramids of Giza", continent: "africa" },
        { name: "Great Wall of China", continent: "asia" },
        { name: "Eiffel Tower", continent: "europe" },
        { name: "Grand Canyon", continent: "north-america" },
        { name: "Christ the Redeemer", continent: "south-america" },
        { name: "Sydney Opera House", continent: "oceania" },
        { name: "Antarctic Research Stations", continent: "antarctica" }
    ];

    const continentSelect = document.getElementById("continent");
    const locationsContainer = document.getElementById("locations");

    function displayLocations(filter) {
        locationsContainer.innerHTML = "";
        const filteredLocations = filter === "all" ? locations : locations.filter(loc => loc.continent === filter);
        
        if (filteredLocations.length === 0) {
            locationsContainer.innerHTML = "<p>No locations found.</p>";
            return;
        }

        filteredLocations.forEach(location => {
            const locationCard = document.createElement("div");
            locationCard.classList.add("location-card");
            locationCard.innerHTML = `<h3>${location.name}</h3>`;
            locationsContainer.appendChild(locationCard);
        });
    }

    continentSelect.addEventListener("change", () => {
        displayLocations(continentSelect.value);
    });

    // Initialize with all locations displayed
    displayLocations("all");
});
