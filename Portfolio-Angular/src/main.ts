import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, TitleStrategy, withInMemoryScrolling } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/routes';
import { I18nTitleStrategy } from './app/i18n/i18n-title.strategy';

bootstrapApplication(App, { providers: [
  provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration:'enabled',anchorScrolling:'enabled'})),
  { provide: TitleStrategy, useClass: I18nTitleStrategy },
] }).catch(err => console.error(err));
