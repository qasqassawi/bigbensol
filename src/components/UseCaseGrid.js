// UseCaseGrid Component for bigbensul
import { categories } from '../data/tools.js';

export function UseCaseGrid() {
  return `
    <section class="use-cases section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Browse by Goal</span>
          <h2 class="section-title">What do you want to do?</h2>
          <p class="section-subtitle">Choose your goal and discover the best tools for the job.</p>
        </div>
        
        <div class="use-case-grid">
          ${categories.map((cat, index) => `
            <a href="/explore?category=${cat.id}" class="use-case-card reveal reveal-delay-${(index % 4) + 1}">
              <div class="use-case-icon">${cat.icon}</div>
              <h3 class="use-case-title">${cat.name}</h3>
              <span class="use-case-count">${cat.count} tools</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
