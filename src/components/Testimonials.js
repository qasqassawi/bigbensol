// Testimonials Component for bigbensul
import { testimonials } from '../data/tools.js';

export function Testimonials() {
  return `
    <section class="testimonials section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Testimonials</span>
          <h2 class="section-title">What people are saying</h2>
          <p class="section-subtitle">Join thousands who've found their perfect tools with bigbensul.</p>
        </div>
        
        <div class="testimonials-grid">
          ${testimonials.map((t, index) => `
            <div class="testimonial-card reveal reveal-delay-${index + 1}">
              <p class="testimonial-quote">"${t.quote}"</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar">${t.avatar}</div>
                <div class="testimonial-info">
                  <div class="testimonial-name">${t.author}</div>
                  <div class="testimonial-role">${t.role}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
