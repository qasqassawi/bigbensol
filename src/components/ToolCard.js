// ToolCard Component for bigbensul

export function ToolCard(tool, options = {}) {
  const { compact = false } = options;

  const ratingStars = '★'.repeat(Math.floor(tool.rating)) + (tool.rating % 1 >= 0.5 ? '½' : '');

  return `
    <article class="tool-card" data-tool-id="${tool.id}">
      <div class="tool-card-header">
        <div class="tool-logo">${tool.logo}</div>
        <div class="tool-info">
          <h3 class="tool-name">
            ${tool.name}
            ${tool.editorPick ? '<span class="badge badge-primary">Editor\'s Pick</span>' : ''}
          </h3>
          <div class="tool-rating">
            <span>${ratingStars}</span>
            <span>${tool.rating}</span>
            <span class="tool-review-count">(${tool.reviewCount.toLocaleString()})</span>
          </div>
        </div>
      </div>
      
      <p class="tool-description">${tool.tagline}</p>
      
      <div class="tool-tags">
        ${tool.tags.map(tag => `
          <span class="tool-tag ${tag.includes('Free') || tag.includes('Discount') ? 'highlight' : ''}">${tag}</span>
        `).join('')}
      </div>
      
      <div class="tool-card-footer">
        <div class="tool-pricing">
          ${tool.pricing.free ? '<strong>Free</strong> plan available' : `From <strong>${tool.pricing.plans[0].price}</strong>`}
        </div>
        <a href="/tool/${tool.id}" class="tool-cta">Learn More</a>
      </div>
    </article>
  `;
}

export function ToolCardSkeleton() {
  return `
    <article class="tool-card">
      <div class="tool-card-header">
        <div class="skeleton skeleton-avatar"></div>
        <div class="tool-info" style="flex: 1;">
          <div class="skeleton skeleton-title"></div>
          <div class="skeleton skeleton-text" style="width: 60%;"></div>
        </div>
      </div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text" style="width: 80%;"></div>
      <div class="tool-tags" style="margin-top: var(--space-4);">
        <div class="skeleton" style="width: 60px; height: 24px; border-radius: 12px;"></div>
        <div class="skeleton" style="width: 80px; height: 24px; border-radius: 12px;"></div>
      </div>
    </article>
  `;
}

export function ToolsGrid(tools) {
  if (!tools || tools.length === 0) {
    return `
      <div class="tools-empty">
        <p>No tools found matching your criteria.</p>
      </div>
    `;
  }

  return `
    <div class="tools-grid">
      ${tools.map(tool => ToolCard(tool)).join('')}
    </div>
  `;
}
