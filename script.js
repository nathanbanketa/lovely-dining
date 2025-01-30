// https://web.bc.edu/dining/hours/diningHours.json
// only use the above link to access the dining hours to fetch!!

// between 12am to 5am
import renderFilters from "./components/renderFilters.js";
import renderDiningHall from "./components/renderDiningHalls.js";
import displayDiningHalls from "./components/displayDiningHalls.js";
import renderHome from "./components/renderHome.js";
import renderNavBar from "./components/NavBar.js";
import renderNews from "./components/renderNews.js";
import renderDiningAcc from "./components/renderDiningAccomodations.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = renderNavBar();

  const page = new URLSearchParams(window.location.search).get("page");

  if (page === "whatsOpen") {
    document.getElementById("main-content").innerHTML = "<strong>Select Dining Hall</strong><div id=dining-halls></div>";
    fetch("https://web.bc.edu/dining/menu/todayMenu_PROD.json")
      .then((response) => response.json())
      .then((menuData) => {
        displayDiningHalls(menuData);

        document
          .getElementById("dining-halls")
          .addEventListener("click", (event) => {
            if (event.target.classList.contains("location-link")) {
              const location = event.target.dataset.location;
              renderDiningHall(menuData, location);
            }
          });
      })
      .catch((error) => console.error("Error loading menu data:", error));
  } else if (page === "news") {
    document.getElementById("main-content").innerHTML =
      '<div id="news-container"></div>';

    fetch("./news.json")
      .then((response) => response.json())
      .then((newsData) => {
        renderNews(newsData);
      })
      .catch((error) => console.error("Error loading news data:", error));
  } else if (page === "diningAccommodations") {
    // Render the dining accommodations page
    document.getElementById("main-content").innerHTML = "";
    renderDiningAcc();
  } else {
    document.getElementById("main-content").innerHTML = "";
    renderHome();
  }
});
