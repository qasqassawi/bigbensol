// Home Page for Pickr
import { Hero } from '../components/Hero.js';
import { HowItWorks } from '../components/HowItWorks.js';
import { UseCaseGrid } from '../components/UseCaseGrid.js';
import { StatsSection } from '../components/StatsSection.js';
import { Testimonials } from '../components/Testimonials.js';
import { EmailCapture } from '../components/EmailCapture.js';
import { ToolsGrid } from '../components/ToolCard.js';
import { getFeaturedTools } from '../data/tools.js';

export function HomePage() {
    const featuredTools = getFeaturedTools();

    return `
    ${Hero()}
    ${HowItWorks()}
    ${UseCaseGrid()}
    
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Featured</span>
          <h2 class="section-title">Top picks this week</h2>
          <p class="section-subtitle">Hand-picked tools that we love and think you will too.</p>
        </div>
        ${ToolsGrid(featuredTools)}
        <div style="text-align: center; margin-top: var(--space-8);">
          <a href="/explore" class="btn btn-secondary btn-lg">View All Tools</a>
        </div>
      </div>
    </section>
    
    ${StatsSection()}
    ${Testimonials()}
    ${EmailCapture()}
  `;
}
