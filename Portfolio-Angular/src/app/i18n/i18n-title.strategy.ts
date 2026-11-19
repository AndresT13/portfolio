import { Injectable, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { I18nService } from './i18n.service';
import { TranslationKey } from './translations';

/** Los `title` de las rutas son claves i18n; el título se re-traduce al cambiar de idioma. */
@Injectable({ providedIn: 'root' })
export class I18nTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly i18n = inject(I18nService);
  private currentKey?: TranslationKey;

  constructor() {
    super();
    effect(() => {
      this.i18n.lang();
      if (this.currentKey) this.title.setTitle(this.i18n.t(this.currentKey));
    });
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const key = this.buildTitle(snapshot) as TranslationKey | undefined;
    if (!key) return;
    this.currentKey = key;
    this.title.setTitle(this.i18n.t(key));
  }
}
