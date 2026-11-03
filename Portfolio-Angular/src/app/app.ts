import { Component, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
@Component({selector:'app-root',standalone:true,imports:[RouterOutlet,RouterLink,RouterLinkActive],template:`
<header class="site-header"><a routerLink="/" class="logo"><span class="logo-mark">◩</span><span>JATG<small>JAIME ANDRES TELLEZ G.</small></span></a>
<nav aria-label="Menú principal"><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Inicio</a><a routerLink="/proyectos" routerLinkActive="active">Proyectos</a><a href="/#especialidades">Especialidades</a><a href="/#sobre-mi">Sobre mí</a></nav>
<button type="button" class="theme-switch" (click)="toggleTheme()" [attr.aria-label]="theme==='light'?'Activar modo oscuro':'Activar modo claro'" [attr.aria-pressed]="theme==='dark'">{{theme==='light'?'☾ Modo oscuro':'☀ Modo claro'}}</button>
<a class="nav-contact" href="https://www.linkedin.com/in/jaimeandrestellezg/" rel="noopener noreferrer" target="_blank">Contacto ↗</a></header>
<main><router-outlet/></main><footer class="footer"><span>© 2026 · Jaime Andres Tellez G.</span><span>Diseñado con Angular + GSAP · PRISM Orange/Red Edition</span><a href="https://www.linkedin.com/in/jaimeandrestellezg/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></footer>`})
export class App implements OnInit {
 private platform=inject(PLATFORM_ID);
 theme:'light'|'dark'='light';
 ngOnInit(){if(!isPlatformBrowser(this.platform))return;const saved=localStorage.getItem('prism-theme');if(saved==='light'||saved==='dark')this.theme=saved;this.applyTheme();}
 toggleTheme(){this.theme=this.theme==='light'?'dark':'light';this.applyTheme();}
 private applyTheme(){if(isPlatformBrowser(this.platform)){document.documentElement.dataset['theme']=this.theme;localStorage.setItem('prism-theme',this.theme);}}
}
