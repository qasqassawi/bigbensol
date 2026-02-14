import { FilterSidebar, initFilterSidebar } from '../components/FilterSidebar.js';
import { ToolsGrid, ToolCardSkeleton } from '../components/ToolCard.js';
import { tools, getToolsByCategory, getEditorPicks, searchTools, categories } from '../data/tools.js';
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

let currentFilters = {};

export function ExplorePage() {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  // Parse URL params
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get('category');
  const searchQuery = params.get('q');
  const filterType = params.get('filter');

  // Initial tool list
  let displayTools = [...tools];
  let pageTitle = t('explore.title');

  if (categoryId) {
    displayTools = getToolsByCategory(categoryId);
    pageTitle = t(`categories.${categoryId}`);
  }

  if (searchQuery) {
    displayTools = searchTools(searchQuery);
    pageTitle = `${t('explore.resultsFor')} "${searchQuery}"`;
  }

  if (filterType === 'editorPick') {
    displayTools = getEditorPicks();
    pageTitle = t('explore.editorsPicks');
  }

  return `
    <div class="container" style="padding-top: calc(80px + var(--space-8));">
      <div class="section-header" style="margin-bottom: var(--space-8);">
        <h1 class="section-title">${pageTitle}</h1>
        <p class="section-subtitle">${displayTools.length} ${t('explore.toolsFound')}</p>
      </div>
      
      <div class="explore-layout">
        ${FilterSidebar(currentFilters)}
        
        <main class="explore-main" id="explore-results">
          ${ToolsGrid(displayTools)}
        </main>
      </div>
    </div>
  `;
}

export function initExplorePage() {
  initFilterSidebar((filters) => {
    currentFilters = filters;
    updateResults(filters);
  });
}

function updateResults(filters) {
  const resultsContainer = document.getElementById('explore-results');
  if (!resultsContainer) return;

  // Show loading
  resultsContainer.innerHTML = `
    <div class="tools-grid">
      ${ToolCardSkeleton()}
      ${ToolCardSkeleton()}
      ${ToolCardSkeleton()}
    </div>
  `;

  // Simulate filtering delay
  setTimeout(() => {
    let filteredTools = [...tools];

    // Apply category filter
    if (filters.category?.length) {
      filteredTools = filteredTools.filter(tool =>
        filters.category.some(cat => tool.categories.includes(cat))
      );
    }

    // Apply pricing filter
    if (filters.pricing?.length) {
      filteredTools = filteredTools.filter(tool => {
        if (filters.pricing.includes('free') && tool.pricing.free) return true;
        if (filters.pricing.includes('freemium') && tool.pricing.type === 'freemium') return true;
        if (filters.pricing.includes('paid') && !tool.pricing.free) return true;
        return false;
      });
    }

    // Apply features filter
    if (filters.features?.length) {
      filteredTools = filteredTools.filter(tool => {
        if (filters.features.includes('hasDiscount') && tool.deal) return true;
        if (filters.features.includes('forStudents') && tool.tags.some(t => t.includes('Student'))) return true;
        return filters.features.length === 0;
      });
    }

    resultsContainer.innerHTML = ToolsGrid(filteredTools);
  }, 300);
}
