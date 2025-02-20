const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
  ];
  
  function populateProductOptions() {
    const productSelect = document.getElementById("product-name");
  
    productSelect.innerHTML = `<option value="" disabled selected>Select a Product ...</option>`;
  
    products.forEach(product => {
      let option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }
  
  function updateReviewCount() {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    populateProductOptions();
  
    const reviewForm = document.getElementById("review-form");
    if (reviewForm) {
      reviewForm.addEventListener("submit", function () {
        updateReviewCount();
      });
    }
  });
