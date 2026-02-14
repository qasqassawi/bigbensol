// FilterSidebar Component for Pickr
import { filters, categories } from '../data/tools.js';
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function FilterSidebar(activeFilters = {}) {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    <aside class="filter-sidebar">
      <div class="filter-header">
        <h3 class="filter-title">${t('filters.title')}</h3>
        <button class="filter-clear" id="filter-clear">${t('filters.clearAll')}</button>
      </div>
      
      <div class="filter-group">
        <h4 class="filter-group-title">${t('filters.groups.category')}</h4>
        <div class="filter-options">
          ${categories.map(cat => `
            <label class="filter-option">
              <input type="checkbox" name="category" value="${cat.id}" 
                ${activeFilters.category?.includes(cat.id) ? 'checked' : ''}>
              <span>${t(`categories.${cat.id}`)}</span>
            </label>
          `).join('')}
        </div>
      </div>
      
      <div class="filter-group">
        <h4 class="filter-group-title">${t('filters.groups.pricing')}</h4>
        <div class="filter-options">
          ${filters.pricing.map(option => `
            <label class="filter-option">
              <input type="checkbox" name="pricing" value="${option.id}"
                ${activeFilters.pricing?.includes(option.id) ? 'checked' : ''}>
              <span>${t(`filters.options.${option.id}`)}</span>
            </label>
          `).join('')}
        </div>
      </div>
      
      <div class="filter-group">
        <h4 class="filter-group-title">${t('filters.groups.features')}</h4>
        <div class="filter-options">
          ${filters.features.map(option => `
            <label class="filter-option">
              <input type="checkbox" name="features" value="${option.id}"
                ${activeFilters.features?.includes(option.id) ? 'checked' : ''}>
              <span>${t(`filters.options.${option.id}`)}</span>
            </label>
          `).join('')}
        </div>
      </div>
      
      <div class="filter-group">
        <h4 class="filter-group-title">${t('filters.groups.type')}</h4>
        <div class="filter-options">
          ${filters.type.map(option => `
            <label class="filter-option">
              <input type="checkbox" name="type" value="${option.id}"
                ${activeFilters.type?.includes(option.id) ? 'checked' : ''}>
              <span>${t(`filters.options.${option.id}`)}</span>
            </label>
          `).join('')}
        </div>
      </div>
    </aside>
  `;
}

export function initFilterSidebar(onFilterChange) {
  const sidebar = document.querySelector('.filter-sidebar');
  if (!sidebar) return;

  const clearBtn = document.getElementById('filter-clear');
  const checkboxes = sidebar.querySelectorAll('input[type="checkbox"]');

  // Handle filter changes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const activeFilters = getActiveFilters();
      onFilterChange(activeFilters);
    });
  });

  // Clear all filters
  clearBtn?.addEventListener('click', () => {
    checkboxes.forEach(cb => cb.checked = false);
    onFilterChange({});
  });
}

function getActiveFilters() {
  const filters = {};
  const sidebar = document.querySelector('.filter-sidebar');

  sidebar?.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
    const name = cb.name;
    if (!filters[name]) filters[name] = [];
    filters[name].push(cb.value);
  });

  return filters;
}
