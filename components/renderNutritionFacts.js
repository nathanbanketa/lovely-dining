export default function renderNutritionFacts(item) {
  const nutritionFactsContainer = document.createElement('section');
  nutritionFactsContainer.classList.add('performance-facts');
  
  nutritionFactsContainer.innerHTML = `
    <div class="performance-facts__close-container">
      <button class="performance-facts__close-btn">&times;</button>
    </div>
    <header class="performance-facts__header">
      <h1 class="performance-facts__title">Nutrition Facts</h1>
      <p>Serving Size ${item.Serving_Size || 'N/A'}
      <p>Servings Per Container ${item.Servings_Per_Container || '1'}</p>
    </header>
    <table class="performance-facts__table">
      <tbody>
        <tr>
          <th colspan="2">
            <b>Calories</b>
            ${item.Calories || 'N/A'}
          </th>
          <td>
            Calories from Fat
            ${item.Calories_From_Fat || 'N/A'}
          </td>
        </tr>
        <tr class="thick-row">
          <td colspan="3" class="small-info">
            <b>% Daily Value*</b>
          </td>
        </tr>
        <tr>
          <th colspan="2">
            <b>Total Fat</b>
            ${item.Total_Fat || 'N/A'}
          </th>
          <td>
            <b>${item.Total_Fat_DV || 'N/A'}%</b>
          </td>
        </tr>
        <tr>
          <td class="blank-cell"></td>
          <th>
            Saturated Fat
            ${item.Sat_Fat || '0g'}
          </th>
          <td>
            <b>${item.Sat_Fat_DV || 'N/A'}%</b>
          </td>
        </tr>
        <tr>
          <td class="blank-cell"></td>
          <th>
            Trans Fat
            ${item.Trans_Fat || '0g'}
          </th>
          <td>
          </td>
        </tr>
        <tr>
          <th colspan="2">
            <b>Cholesterol</b>
            ${item.Cholesterol || '0mg'}
          </th>
          <td>
            <b>${item.Cholesterol_DV || 'N/A'}%</b>
          </td>
        </tr>
        <tr>
          <th colspan="2">
            <b>Sodium</b>
            ${item.Sodium || '0mg'}
          </th>
          <td>
            <b>${item.Sodium_DV || 'N/A'}%</b>
          </td>
        </tr>
        <tr>
          <th colspan="2">
            <b>Total Carbohydrate</b>
            ${item.Total_Carb || 'N/A'}
          </th>
          <td>
            <b>${item.Total_Carb_DV || 'N/A'}%</b>
          </td>
        </tr>
        <tr>
          <td class="blank-cell"></td>
          <th>
            Dietary Fiber
            ${item.Dietary_Fiber || '0g'}
          </th>
          <td>
            <b>${item.Dietary_Fiber_DV || 'N/A'}%</b>
          </td>
        </tr>
        <tr>
          <td class="blank-cell"></td>
          <th>
            Sugars
            ${item.Sugars || '0g'}
          </th>
          <td>
          </td>
        </tr>
        <tr class="thick-end">
          <th colspan="2">
            <b>Protein</b>
            ${item.Protein || 'N/A'}
          </th>
          <td>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="performance-facts__table--grid">
      <tbody>
        <tr>
          <td colspan="2">
            Vitamin D
            ${item.Vitamin_d_DV || 'N/A'}%
          </td>
          <td>
            Calcium
            ${item.Calcium_DV || 'N/A'}%
          </td>
        </tr>
        <tr class="thin-end">
          <td colspan="2">
            Iron
            ${item.Iron_DV || 'N/A'}%
          </td>
          <td>
            Potassium
            ${item.Potassium_DV || 'N/A'}%
          </td>
        </tr>
      </tbody>
    </table>

    <p class="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</p>

    <p class="small-info text-center">
      Calories per gram:
      Fat 9 &bull; Carbohydrate 4 &bull; Protein 4
    </p>
  `;
  
  const existingNutritionFacts = document.querySelector('.performance-facts');
  if (existingNutritionFacts) {
    existingNutritionFacts.remove();
  }
  
  const closeBtn = nutritionFactsContainer.querySelector('.performance-facts__close-btn');
  closeBtn.addEventListener('click', () => {
    nutritionFactsContainer.remove();
  });
  
  return nutritionFactsContainer;
}