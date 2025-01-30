export default function displayDiningHalls(data) {
  const diningHalls = document.getElementById("dining-halls");

  const now = new Date();
  const estOffset = -5;
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const estHours = (utcHours + estOffset + 24) % 24;

  // this is to check if the time is between 11:59pm to 6:29 AM
  // these are the hours where BC dining isn't open anywhere
  // Only show the menu 1 hour before Dining opens
  // and end the menu once it's past 11:45PM
  if (
    (estHours <= 5 && utcMinutes <= 29) ||
    (estHours >= 23 && utcMinutes >= 45)
  ) {
    diningHalls.innerHTML += `<p>All Dining Halls Are Closed! Please Come Back @ 5:45AM </p>`;
    diningHalls.innerHTML +=
      '<img src = "https://cdn.glitch.global/0c460f65-0043-4caa-9754-784aebad2262/closed.png?v=1733336559386" alt=closed>';
    return;
  }
  const halls = [...new Set(data.map((item) => item.Location_Name))];

  if (halls.length === 0) {
    diningHalls.innerHTML += `<p>No Dining Halls Are Currently Open.</p>`;
    return;
  }

  halls.forEach((location) => {
    const link = document.createElement("a");
    link.href = "#";
    link.classList.add("location-link");
    link.dataset.location = location;
    link.textContent = location;
    diningHalls.appendChild(link);
  });
}
