document.addEventListener("DOMContentLoaded", () => {
    const locations = [
        { name: "Eiffel Tower", country: "France", continent: "Europe", description: "A wrought-iron lattice tower in Paris." },
        { name: "Great Wall of China", country: "China", continent: "Asia", description: "A series of fortifications made of stone, brick, and wood." },
        { name: "Grand Canyon", country: "USA", continent: "North America", description: "A steep-sided canyon carved by the Colorado River." },
        { name: "Machu Picchu", country: "Peru", continent: "South America", description: "A 15th-century Inca citadel located in the Andes Mountains." },
        { name: "Sydney Opera House", country: "Australia", continent: "Australia", description: "A multi-venue performing arts center in Sydney." },
        { name: "Pyramids of Giza", country: "Egypt", continent: "Africa", description: "Ancient pyramids built as tombs for the Pharaohs." }
    ];

    const continentFilter = document.getElementById("continent-filter");
    const locationsContainer = document.getElementById("locations-container");

    function displayLocations(filteredLocations) {
        locationsContainer.innerHTML = "";
        filteredLocations.forEach(location => {
            const locationCard = document.createElement("div");
            locationCard.classList.add("location-card");
            locationCard.innerHTML = `
                <h3>${location.name}</h3>
                <p><strong>Country:</strong> ${location.country}</p>
                <p>${location.description}</p>
            `;
            locationsContainer.appendChild(locationCard);
        });
    }

    // Initial display of all locations
    displayLocations(locations);

    // Filtering based on continent selection
    if (continentFilter) {
        continentFilter.addEventListener("change", () => {
            const selectedContinent = continentFilter.value;
            if (selectedContinent === "all") {
                displayLocations(locations);
            } else {
                const filtered = locations.filter(location => location.continent === selectedContinent);
                displayLocations(filtered);
            }
        });
    }
});
