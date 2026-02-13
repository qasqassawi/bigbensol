// Categories Page for Pickr
import { categories, getToolsByCategory } from '../data/tools.js';

export function CategoriesPage() {
    return `
    <div class="container" style="padding-top: calc(80px + var(--space-8));">
      <div class="section-header" style="margin-bottom: var(--space-12);">
        <span class="section-label">Browse</span>
        <h1 class="section-title">All Categories</h1>
        <p class="section-subtitle">Find the perfect tool for any goal.</p>
      </div>
      
      <div class="use-case-grid">
        ${categories.map(cat => {
        const catTools = getToolsByCategory(cat.id);
        return `
            <a href="/explore?category=${cat.id}" class="use-case-card reveal">
              <div class="use-case-icon">${cat.icon}</div>
              <h3 class="use-case-title">${cat.name}</h3>
              <span class="use-case-count">${catTools.length} tools</span>
              <div style="margin-top: var(--space-4); display: flex; gap: var(--space-2); flex-wrap: wrap; justify-content: center;">
                ${catTools.slice(0, 3).map(t => `
                  <span class="badge">${t.name}</span>
                `).join('')}
              </div>
            </a>
          `;
    }).join('')}
      </div>
    </div>
  `;
}
