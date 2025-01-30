export default function renderNavbar() {
  return `
    <nav class="topNavBar">
      <ul class="topNavBarLinks">
        <li><a href="index.html">Home</a></li>
        <li><a href="?page=whatsOpen">What's Open?</a></li>
        <li><a href="?page=news">News</a></li>
        <li><a href="?page=diningAccommodations">Dining Accommodations</a></li>
      </ul>
    </nav>
  `;
}
