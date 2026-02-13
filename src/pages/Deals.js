// Deals Page for Pickr
import { getToolsWithDeals } from '../data/tools.js';

export function DealsPage() {
    const dealsTools = getToolsWithDeals();

    return `
    <div class="container" style="padding-top: calc(80px + var(--space-8));">
      <div class="section-header" style="margin-bottom: var(--space-12);">
        <span class="section-label">Special Offers</span>
        <h1 class="section-title">Deals & Discounts</h1>
        <p class="section-subtitle">Exclusive offers and savings on the best tools. Updated regularly.</p>
      </div>
      
      <div class="tools-grid">
        ${dealsTools.map(tool => `
          <div class="deal-card">
            <div class="deal-badge">${tool.deal.expires ? 'Limited Time' : 'Ongoing'}</div>
            <div class="tool-card-header" style="margin-bottom: var(--space-4);">
              <div class="tool-logo">${tool.logo}</div>
              <div class="tool-info">
                <h3 class="tool-name">${tool.name}</h3>
                <div class="tool-category">${tool.tagline}</div>
              </div>
            </div>
            <div class="deal-discount">${tool.deal.discount}</div>
            <p class="tool-description">${tool.description}</p>
            ${tool.deal.code ? `
              <div class="deal-terms" style="background: var(--bg-tertiary); padding: var(--space-3); border-radius: var(--radius-md); margin: var(--space-4) 0;">
                Use code: <strong>${tool.deal.code}</strong>
              </div>
            ` : ''}
            ${tool.deal.expires ? `
              <p class="deal-terms">Expires: ${new Date(tool.deal.expires).toLocaleDateString()}</p>
            ` : ''}
            <div style="display: flex; gap: var(--space-3); margin-top: var(--space-4);">
              <a href="${tool.affiliateUrl}" class="btn btn-primary" style="flex: 1;" target="_blank">
                Get Deal →
              </a>
              <a href="/tool/${tool.id}" class="btn btn-secondary">Details</a>
            </div>
          </div>
        `).join('')}
      </div>
      
      ${dealsTools.length === 0 ? `
        <div style="text-align: center; padding: var(--space-16);">
          <p style="font-size: var(--font-size-xl); color: var(--text-secondary);">
            No active deals right now. Check back soon!
          </p>
          <a href="/explore" class="btn btn-primary btn-lg" style="margin-top: var(--space-6);">
            Browse All Tools
          </a>
        </div>
      ` : ''}
      
      <div style="text-align: center; margin-top: var(--space-12); padding: var(--space-8); background: var(--bg-secondary); border-radius: var(--radius-2xl);">
        <p style="color: var(--text-secondary);">
          ℹ️ These deals may include affiliate links. We only feature products we genuinely recommend.
        </p>
      </div>
    </div>
  `;
}
