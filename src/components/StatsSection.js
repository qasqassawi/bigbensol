// Stats Section Component for bigbensul
import { stats } from '../data/tools.js';

export function StatsSection() {
  return `
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          ${stats.map(stat => `
            <div class="stat-card reveal">
              <div class="stat-number" data-counter="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
              <div class="stat-label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
