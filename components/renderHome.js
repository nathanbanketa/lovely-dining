export default function renderHome() {
  const main = document.getElementById("main-content");
  main.classList.add("homePage");
  main.innerHTML = `
  <h1>Welcome to BC Dining</h1>
      <p>Discover What's Open, Find Your Favorite Meals, and Stay Updated With Dining News!</p>
      <section id="menu-container">
      </section>
      <section id="hours-container">
      </section>
      `;
}
