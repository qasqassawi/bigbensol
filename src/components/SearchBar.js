// SearchBar Component for bigbensul
import { searchPlaceholders, searchChips } from '../data/tools.js';
import { initPlaceholderRotation } from '../utils/animations.js';
import { router } from '../router.js';
import { getCurrentLanguage } from '../main.js';
import { getTranslation } from '../data/translations.js';

export function SearchBar(options = {}) {
  const { large = false, showChips = true } = options;
  const lang = getCurrentLanguage();
  const t = (key) => getTranslation(key, lang);

  return `
    <div class="search-container">
      <div class="search-wrapper" id="search-wrapper">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          class="search-input ${large ? 'search-input-lg' : ''}" 
          id="search-input"
          placeholder="${t('common.searchPlaceholder')}"
          autocomplete="off"
        >
      </div>
      ${showChips ? `
        <div class="search-chips" id="search-chips">
          ${searchChips.map(chip => `
            <button class="search-chip" data-chip="${chip}">${chip}</button>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

export function initSearchBar() {
  const input = document.getElementById('search-input');
  const wrapper = document.getElementById('search-wrapper');
  const chips = document.getElementById('search-chips');

  if (!input) return;

  // Placeholder rotation
  const cleanupRotation = initPlaceholderRotation(input, searchPlaceholders, 3000);

  // Focus effects
  input.addEventListener('focus', () => {
    wrapper.classList.add('focused');
    chips?.classList.add('visible');
  });

  input.addEventListener('blur', () => {
    // Delay to allow chip clicks
    setTimeout(() => {
      wrapper.classList.remove('focused');
      chips?.classList.remove('visible');
    }, 200);
  });

  // Search on Enter
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      performSearch(input.value.trim());
    }
  });

  // Chip clicks
  chips?.querySelectorAll('.search-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const term = chip.dataset.chip;
      input.value = term;
      performSearch(term);
    });
  });



  return () => {
    cleanupRotation?.();
  };
}

function performSearch(query) {
  router.navigate(`/explore?q=${encodeURIComponent(query)}`);
}
