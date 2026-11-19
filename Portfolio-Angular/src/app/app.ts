import { Component, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { I18nService } from './i18n/i18n.service';
@Component({selector:'app-root',standalone:true,imports:[RouterOutlet,RouterLink,RouterLinkActive],template:`
<header class="site-header"><a routerLink="/" class="logo"><span class="logo-mark">◩</span><span>JATG<small>JAIME ANDRES TELLEZ G.</small></span></a>
<nav [attr.aria-label]="i18n.t('nav.aria')"><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">{{i18n.t('nav.home')}}</a><a routerLink="/proyectos" routerLinkActive="active">{{i18n.t('nav.projects')}}</a><a routerLink="/" fragment="especialidades">{{i18n.t('nav.specialties')}}</a><a routerLink="/" fragment="sobre-mi">{{i18n.t('nav.about')}}</a></nav>
<div class="header-controls">
<button type="button" class="theme-switch lang-switch" (click)="i18n.toggle()" [attr.aria-label]="i18n.t('lang.aria')" [attr.lang]="i18n.nextLang()">🌐 {{i18n.t('lang.switch')}}</button>
<button type="button" class="theme-switch" (click)="toggleTheme()" [attr.aria-label]="theme==='light'?i18n.t('theme.ariaToDark'):i18n.t('theme.ariaToLight')" [attr.aria-pressed]="theme==='dark'">{{theme==='light'?i18n.t('theme.toDark'):i18n.t('theme.toLight')}}</button>
</div>
<a class="nav-contact" href="https://www.linkedin.com/in/jaimeandrestellezg/" rel="noopener noreferrer" target="_blank">{{i18n.t('nav.contact')}}</a></header>
<main><router-outlet/></main><footer class="footer"><span>© 2026 · Jaime Andres Tellez G.</span><span>{{i18n.t('footer.madeWith')}}</span><a href="https://www.linkedin.com/in/jaimeandrestellezg/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></footer>`})
export class App implements OnInit {
 private platform=inject(PLATFORM_ID);
 readonly i18n=inject(I18nService);
 theme:'light'|'dark'='light';
 ngOnInit(){if(!isPlatformBrowser(this.platform))return;const saved=localStorage.getItem('prism-theme');if(saved==='light'||saved==='dark')this.theme=saved;this.applyTheme();}
 toggleTheme(){this.theme=this.theme==='light'?'dark':'light';this.applyTheme();}
 private applyTheme(){if(isPlatformBrowser(this.platform)){document.documentElement.dataset['theme']=this.theme;localStorage.setItem('prism-theme',this.theme);}}
}
