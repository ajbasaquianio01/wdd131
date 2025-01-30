const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const nav = document.querySelector("nav");
const hamburgerButton = document.createElement("button");
hamburgerButton.textContent = "☰"; // Default menu icon
hamburgerButton.classList.add("hamburger");
hamburgerButton.setAttribute("aria-label", "Toggle menu");

const header = document.querySelector("header");
header.appendChild(hamburgerButton);

hamburgerButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    hamburgerButton.textContent = isOpen ? "✖" : "☰"; // Change icon based on menu state
});

const style = document.createElement("style");
style.textContent = `
  /* Hamburger button styles */
  .hamburger {
    background: none;
    border: none;
    font-size: 2rem;
    color: #d2f898; /* Mindaro */
    cursor: pointer;
    display: block; /* Visible on smaller screens */
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  /* Navigation styles for smaller screens */
  nav {
    display: none;
    flex-direction: column;
    gap: 1rem;
  }

  /* Navigation styles when open */
  nav.open {
    display: flex;
  }

  /* Larger screen styles */
  @media (min-width: 768px) {
    .hamburger {
      display: none; /* Hide hamburger on larger screens */
    }
    nav {
      display: flex;
      flex-direction: row;
    }
  }
`;

document.head.appendChild(style);