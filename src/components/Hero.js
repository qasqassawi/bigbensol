import { SearchBar } from './SearchBar.js';
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function Hero() {
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    <section class="hero">
      <div class="container hero-content">
        <h1 class="hero-title">
          ${t('hero.title')}<br>
          <span class="hero-title-gradient">${t('hero.subtitle')}</span>
        </h1>
        <p class="hero-subtitle">
          ${t('hero.description')}
        </p>
        <div class="hero-search">
          ${SearchBar({ large: true, showChips: true })}
        </div>
        <div class="hero-buttons">
          <a href="/explore" class="btn btn-primary btn-lg">${t('hero.exploreBtn')}</a>
          <a href="/explore?filter=editorPick" class="btn btn-secondary btn-lg">${t('hero.picksBtn')}</a>
        </div>
      </div>
    </section>
  `;
}
