import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Lang, PORTFOLIO_CONFIG } from '../portfolio.config';
import { TRANSLATIONS, TranslationKey } from './translations';

const STORAGE_KEY = 'prism-lang';

/** i18n en tiempo de ejecución basado en Signals: cambio de idioma sin recargar ni recompilar. */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly platform = inject(PLATFORM_ID);
  private readonly doc = inject(DOCUMENT);
  private readonly meta = inject(Meta);

  readonly supported = PORTFOLIO_CONFIG.supportedLanguages;
  readonly lang = signal<Lang>(this.initialLang());
  /** Idioma al que conmuta el selector (el siguiente de la lista soportada). */
  readonly nextLang = computed<Lang>(() => {
    const i = this.supported.indexOf(this.lang());
    return this.supported[(i + 1) % this.supported.length];
  });
  readonly locale = computed(() => (this.lang() === 'es' ? 'es-CO' : 'en-US'));

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.doc.documentElement.lang = lang;
      this.meta.updateTag({ name: 'description', content: this.t('meta.description') });
      this.meta.updateTag({ property: 'og:locale', content: lang === 'es' ? 'es_CO' : 'en_US' });
      if (isPlatformBrowser(this.platform)) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* almacenamiento no disponible */ }
      }
    });
  }

  setLang(lang: Lang): void {
    if (this.supported.includes(lang)) this.lang.set(lang);
  }

  toggle(): void { this.setLang(this.nextLang()); }

  /** Traduce una clave; admite parámetros {nombre}. Lee el signal `lang`, por lo que es reactivo en plantillas. */
  t(key: TranslationKey, params?: Record<string, string | number>): string {
    const value = TRANSLATIONS[this.lang()][key] ?? TRANSLATIONS[PORTFOLIO_CONFIG.defaultLanguage][key] ?? key;
    return params ? value.replace(/\{(\w+)\}/g, (_, p) => String(params[p] ?? `{${p}}`)) : value;
  }

  /** Para claves construidas dinámicamente (categorías, estados). */
  tDynamic(key: string): string { return this.t(key as TranslationKey); }

  private initialLang(): Lang {
    const fallback = PORTFOLIO_CONFIG.defaultLanguage;
    if (!isPlatformBrowser(this.platform)) return fallback;
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      return saved && this.supported.includes(saved) ? saved : fallback;
    } catch { return fallback; }
  }
}
