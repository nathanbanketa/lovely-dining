export default function renderDiningAccomodations() {
  const mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = ""; // Clear existing content

  // 1. Introduction Section
  const introSection = document.createElement("section");
  introSection.classList.add("intro-section");
  introSection.innerHTML = `
    <h1>Dining Accommodations</h1>
    <p> With the increase of student Dining Accommodations, we've changed our process in getting meals.
    You can now request custom-made meals and schedule your pick-up time.</p>
    
  `;
  mainContainer.appendChild(introSection);

  const guideSection = document.createElement("section");
  guideSection.classList.add("guide-section");
  guideSection.innerHTML = `
    <h2>How Accommodations Work</h2>
    <ol>
      <li>First, contact the Office of Disability Services. Discuss to the best of your ability what dining accommodations you seek.</li>
      <li>You will meet with with the Administrative Dietitian (Christina Karalolos) to discuss your accomodation plan.</li>
      <li>After reviewing your plan, you will meet with your local dining manager to show you the meal pick-up locations</li>
      <li>Once everyone is on the same page, you will gain access to the meal ordering ahead form!</li>
    </ol>
    <p>Visit the accomodation process page for <a href="https://www.bc.edu/content/bc-web/offices/auxiliary-services/sites/dining/health-wellness.html#tab-policy_for_food_accommodations"> more information</a>.</p>
    <p>To schedule an appointment vist  <a href="https://calendly.com/bcdiningdietitian"> the Dining Team website</a>.</p>

  `;
  mainContainer.appendChild(guideSection);

  const orderSection = document.createElement("section");
  orderSection.classList.add("order-section");
  orderSection.innerHTML = `
    <h2>How Scheduling Meals Work</h2>
    <ol>
      <li>Open the form and review the guidelines. </li>
      <img src = "https://cdn.glitch.global/0c460f65-0043-4caa-9754-784aebad2262/moreguidelines.png?v=1733413049082", alt = "reviewterms">
      <li>Enter your information. </li>
      <img src = "https://cdn.glitch.global/0c460f65-0043-4caa-9754-784aebad2262/itemFillings.png?v=1733413053870", alt = "itemfillings">
      <li>Select your food options depending on the time (ex: lunch). </li>
      <img src = "https://cdn.glitch.global/0c460f65-0043-4caa-9754-784aebad2262/foodCustom.png?v=1733413057287", alt = "foodcustom">
      <li>Select your food requests and review </li>
      <img src = "https://cdn.glitch.global/0c460f65-0043-4caa-9754-784aebad2262/options.png?v=1733413062168", alt = "options">
      <li>Submit! Congradulations! You will be able to pick up your meal as listed in your submission </li>
    </ol>
  `;
  mainContainer.appendChild(orderSection);

  const teamSection = document.createElement("section");
  teamSection.classList.add("team-section");
  teamSection.innerHTML = `
    <h2>Our Team</h2>
    <p>If you have any questions or concerns, feel free to contact the Dining Team!</p>
    <div class="team-member">
      <h3>Christina Karalolos</h3>
      <p>Role: Administrative Dining Dietitian</p>
      <p>Contact: christina.karalolos@bc.edu</p>
    </div>
    <div class="team-member">
      <h3>Maura Donovan</h3>
      <p>Role: Dining Dietitian For Disordered Eating Needs</p>
      <p>Contact: maura.donovan@bc.edu</p>
    </div>
    
  `;
  mainContainer.appendChild(teamSection);
}
