// Temple Data Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-lds-262027-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52984,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-275339-wallpaper.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44193,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-lds-292992-wallpaper.jpg"
  }
];

// Function to dynamically generate temple cards
function displayTemples(filteredTemples) {
  const templeContainer = document.getElementById("temple-container");
  templeContainer.innerHTML = ""; // Clear previous results

  filteredTemples.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    templeContainer.appendChild(card);
  });
}

// Filtering function
function filterTemples(category) {
  let filteredTemples = [];

  switch (category) {
    case "old":
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
      break;
    case "new":
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
      break;
    case "large":
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
  }

  displayTemples(filteredTemples);
}

// Event listeners for buttons
document.querySelectorAll(".nav-button").forEach(button => {
  button.addEventListener("click", () => filterTemples(button.dataset.filter));
});

// Display all temples on page load
displayTemples(temples);

// Footer Updates
document.getElementById("copyright").textContent = `© ${new Date().getFullYear()} Temple Album`;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
