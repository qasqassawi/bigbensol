// Tool Detail Page for Pickr
import { getToolById, tools } from '../data/tools.js';
import { ToolCard } from '../components/ToolCard.js';

export function ToolDetailPage(params) {
    const tool = getToolById(params.id);

    if (!tool) {
        return `
      <div class="container" style="padding-top: calc(80px + var(--space-16)); text-align: center;">
        <h1>Tool not found</h1>
        <p>The tool you're looking for doesn't exist.</p>
        <a href="/explore" class="btn btn-primary" style="margin-top: var(--space-6);">Browse All Tools</a>
      </div>
    `;
    }

    // Get alternatives (same category, different tool)
    const alternatives = tools
        .filter(t => t.id !== tool.id && t.categories.some(c => tool.categories.includes(c)))
        .slice(0, 3);

    return `
    <div class="tool-detail">
      <div class="container">
        <div class="tool-detail-header">
          <div class="tool-detail-logo">${tool.logo}</div>
          <div class="tool-detail-info">
            <h1 class="tool-detail-name">
              ${tool.name}
              ${tool.editorPick ? '<span class="badge badge-primary">Editor\'s Pick</span>' : ''}
            </h1>
            <p class="tool-detail-tagline">${tool.tagline}</p>
            <div class="tool-tags">
              ${tool.tags.map(tag => `
                <span class="tool-tag ${tag.includes('Free') || tag.includes('Discount') ? 'highlight' : ''}">${tag}</span>
              `).join('')}
            </div>
            <div class="tool-detail-actions">
              <a href="${tool.affiliateUrl}" class="btn btn-primary btn-lg" target="_blank" rel="noopener">
                Try ${tool.name} →
              </a>
              <a href="#alternatives" class="btn btn-secondary btn-lg">Compare Alternatives</a>
            </div>
          </div>
        </div>
        
        <div class="tool-detail-content">
          <div class="tool-detail-main">
            <!-- Best For -->
            <div class="tool-detail-section">
              <h3>✅ Best For</h3>
              <ul style="list-style: none; display: flex; flex-wrap: wrap; gap: var(--space-2);">
                ${tool.bestFor.map(item => `
                  <li class="badge badge-success">${item}</li>
                `).join('')}
              </ul>
            </div>
            
            <!-- Not For -->
            <div class="tool-detail-section">
              <h3>⚠️ Not Ideal For</h3>
              <ul style="list-style: none; display: flex; flex-wrap: wrap; gap: var(--space-2);">
                ${tool.notFor.map(item => `
                  <li class="badge">${item}</li>
                `).join('')}
              </ul>
            </div>
            
            <!-- Pros & Cons -->
            <div class="tool-detail-section">
              <h3>Honest Assessment</h3>
              <div class="pros-cons">
                <div>
                  <h4 style="color: var(--color-success); margin-bottom: var(--space-3);">Pros</h4>
                  <ul class="pros-list">
                    ${tool.pros.map(pro => `<li>${pro}</li>`).join('')}
                  </ul>
                </div>
                <div>
                  <h4 style="color: var(--color-error); margin-bottom: var(--space-3);">Cons</h4>
                  <ul class="cons-list">
                    ${tool.cons.map(con => `<li>${con}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Why We Recommend -->
            <div class="tool-detail-section">
              <h3>💡 Why We Recommend ${tool.name}</h3>
              <p style="color: var(--text-secondary); line-height: 1.7;">
                ${tool.description} With a rating of ${tool.rating}/5 from ${tool.reviewCount.toLocaleString()} reviews, 
                ${tool.name} has proven to be a reliable choice for ${tool.bestFor[0].toLowerCase()} and ${tool.bestFor[1]?.toLowerCase() || 'more'}.
                ${tool.pricing.free ? 'The free tier makes it accessible to try without commitment.' : ''}
              </p>
            </div>
            
            <!-- Alternatives -->
            <div class="tool-detail-section" id="alternatives">
              <h3>🔄 Alternatives to Consider</h3>
              <div class="tools-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                ${alternatives.map(alt => ToolCard(alt)).join('')}
              </div>
            </div>
          </div>
          
          <div class="tool-detail-sidebar">
            <!-- Pricing -->
            <div class="pricing-card">
              <h4>💰 Pricing</h4>
              <div class="pricing-tiers">
                ${tool.pricing.plans.map(plan => `
                  <div class="pricing-tier">
                    <span>${plan.name}</span>
                    <strong>${plan.price}</strong>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <!-- Deal -->
            ${tool.deal ? `
              <div class="deal-card">
                <div class="deal-badge">Limited</div>
                <div class="deal-discount">${tool.deal.discount}</div>
                <p style="margin: var(--space-3) 0;">Special offer for Pickr readers</p>
                ${tool.deal.code ? `<p class="deal-terms">Use code: <strong>${tool.deal.code}</strong></p>` : ''}
                ${tool.deal.expires ? `<p class="deal-terms">Expires: ${new Date(tool.deal.expires).toLocaleDateString()}</p>` : ''}
                <a href="${tool.affiliateUrl}" class="btn btn-primary" style="width: 100%; margin-top: var(--space-4);" target="_blank">
                  Claim Deal →
                </a>
              </div>
            ` : ''}
            
            <!-- Affiliate Disclosure -->
            <div class="affiliate-badge">
              <span>ℹ️</span>
              <span>This page may contain affiliate links. We only recommend tools we trust.</span>
            </div>
            
            <!-- Rating -->
            <div class="pricing-card">
              <h4>⭐ Rating</h4>
              <div style="text-align: center; padding: var(--space-4) 0;">
                <div style="font-size: var(--font-size-4xl); font-weight: bold; color: var(--color-warning);">
                  ${tool.rating}
                </div>
                <div style="color: var(--text-secondary);">
                  Based on ${tool.reviewCount.toLocaleString()} reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
