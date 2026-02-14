// Testimonials Component for bigbensul
import { testimonials } from '../data/tools.js';
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function Testimonials() {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    <section class="testimonials section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${t('testimonials.label')}</span>
          <h2 class="section-title">${t('testimonials.title')}</h2>
          <p class="section-subtitle">${t('testimonials.subtitle')}</p>
        </div>
        
        <div class="testimonials-grid">
          ${testimonials.map((test, index) => `
            <div class="testimonial-card reveal reveal-delay-${index + 1}">
              <p class="testimonial-quote">"${t(`testimonials.quote${index + 1}`)}"</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar">${test.avatar}</div>
                <div class="testimonial-info">
                  <div class="testimonial-name">${test.author}</div>
                  <div class="testimonial-role">${t(`testimonials.role${index + 1}`)}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
