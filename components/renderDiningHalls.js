import renderFilters from "./renderFilters.js";
import renderNutritionFacts from "./renderNutritionFacts.js";

export default function renderDiningHall(data, selectedLocation) {
  const menuContainer = document.getElementById("menu-container");
  menuContainer.innerHTML = "";
  const locationItems = data.filter(
    (item) => item.Location_Name === selectedLocation
  );
  if (locationItems.length === 0) {
    menuContainer.innerHTML = `<p>No menu items found for ${selectedLocation}.</p>`;
    return;
  } 
  function displayFilteredItems(tags) {
    const filteredItems = tags.length
      ? locationItems.filter((item) =>
          tags.every((tag) => item.web_codes_fullnames.includes(tag))
        )
      : locationItems;
    
    menuContainer.innerHTML = "";
    
    if (filteredItems.length === 0 || filteredItems.length < 6) {
      const warningMessage = document.createElement("p");
      warningMessage.classList.add("warning-message");
      warningMessage.textContent = `There are limited options at this location (only ${filteredItems.length} item(s) based on your filters). We suggest you visit the following website for further consultation.`;
      menuContainer.appendChild(warningMessage);
      
      const warningMessageLink = document.createElement("p");
      warningMessageLink.classList.add("warning-message-link");
      warningMessageLink.textContent =
        "https://www.bc.edu/bc-web/offices/auxiliary-services/sites/dining/health-wellness.html";
      warningMessageLink.href =
        "https://www.bc.edu/bc-web/offices/auxiliary-services/sites/dining/health-wellness.html";
      menuContainer.appendChild(warningMessageLink);
    }
    
    let nutritionFactsContainer = document.getElementById('nutrition-facts-container');
    if (!nutritionFactsContainer) {
      nutritionFactsContainer = document.createElement('div');
      nutritionFactsContainer.id = 'nutrition-facts-container';
      document.body.appendChild(nutritionFactsContainer);
    }
    
    filteredItems.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("menu-item");
      itemDiv.innerHTML = `
        <h2>${item.Recipe_Print_As_Name}</h2>
        <p><strong>Calories:</strong> ${item.Calories}</p>
        <p><strong>Price:</strong> $${
          Math.round((parseFloat(item.Selling_Price) + Number.EPSILON) * 100) /
          100
        }</p>
        <p><strong>Tags:</strong> ${item.web_codes_fullnames}</p>
        <p><strong>Served During:</strong> ${item.Meal_Name} </p>
        <p><strong>Serve Date:</strong> ${item.Serve_Date}</p>
      `;
      
      itemDiv.addEventListener('click', () => {
        nutritionFactsContainer.innerHTML = '';
        const nutritionFacts = renderNutritionFacts(item);
        nutritionFactsContainer.appendChild(nutritionFacts);
      });
      menuContainer.appendChild(itemDiv);
    });
  } 
  displayFilteredItems([]); 
  const filtersContainer = document.getElementById("filters-container");
  const filtersUI = renderFilters(locationItems, displayFilteredItems);
  filtersContainer.innerHTML = "";
  filtersContainer.appendChild(filtersUI);
}