const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const nav = document.querySelector("nav");
const hamburgerButton = document.createElement("button");
hamburgerButton.textContent = "☰";
hamburgerButton.classList.add("hamburger");
hamburgerButton.setAttribute("aria-label", "Toggle menu");

const header = document.querySelector("header");
header.appendChild(hamburgerButton);

hamburgerButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    hamburgerButton.textContent = isOpen ? "✖" : "☰";
});

const style = document.createElement("style");
style.textContent = `
  .hamburger {
    background: none;
    border: none;
    font-size: 2rem;
    color: #d2f898; /* Mindaro */
    cursor: pointer;
    display: none; /* Hidden by default */
  }

  nav {
    display: none;
    flex-direction: column;
    gap: 1rem;
  }

  nav.open {
    display: flex;
  }

  @media (min-width: 768px) {
    .hamburger {
      display: none; /* Hidden on larger screens */
    }
    nav {
      display: flex;
      flex-direction: row;
    }
  }
`;
document.head.appendChild(style);