export default function renderFilters(data, applyFilterCallback) {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('filter-sidebar');

  const allTags = [
    ...new Set(
      data
        .flatMap((item) => item.web_codes_fullnames.split(', '))
        .filter((tag) => tag.trim() !== '')
    ),
  ];

  if (allTags.length > 0) {
    sidebar.innerHTML = `
      <h3>Filter by Tags</h3>
      <ul>
        ${allTags
          .map(
            (tag) => `
          <li>
            <label>
              <input type="checkbox" class="tag-filter" value="${tag}">
              ${tag}
            </label>
          </li>
        `
          )
          .join('')}
      </ul>
    `;

    sidebar.addEventListener('change', () => {
      const selectedTags = Array.from(
        sidebar.querySelectorAll('.tag-filter:checked')
      ).map((checkbox) => checkbox.value);

      applyFilterCallback(selectedTags);
    });
  } else {
    sidebar.innerHTML = `<p>No Available Tags To Filter</p>`;
  }

  return sidebar;
}
