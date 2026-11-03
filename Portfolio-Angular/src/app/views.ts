import { Component, inject, Input, AfterViewInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DystopianHeroComponent } from './components/dystopian-hero/dystopian-hero.component';
import { PROJECTS,Project } from './projects';
@Component({selector:'app-project-cards',standalone:true,imports:[RouterLink],template:`
<div class="projects-grid">
  @for(p of items;track p.slug){
    <article class="project-card" (pointermove)="tilt($event)" (pointerleave)="untilt($event)">
      <div class="card-icon">{{p.icon}}</div>
      <div class="card-info">
        <div class="tiny orange">{{p.category}} · {{p.status}}</div>
        <h3>{{p.name}}</h3>
        <p>{{p.description}}</p>
        <div class="chips">@for(t of p.stack.slice(0,4);track t){<span>{{t}}</span>}</div>
      </div>
      <div class="project-links">
        <a class="card-action" [routerLink]="['/proyectos',p.slug]">Ver proyecto ↗</a>
        @if(p.playUrl){<a class="card-action action-play" [href]="p.playUrl" target="_blank" rel="noopener noreferrer">🎮 Jugar en línea ↗</a>}
        @if(p.scorersUrl){<a class="card-action action-play" [href]="p.scorersUrl" target="_blank" rel="noopener noreferrer">⚽ Ver goleadores ↗</a>}
        @if(p.website){<a class="card-action" [href]="p.website" target="_blank" rel="noopener noreferrer">Visitar web ↗</a>}
        @if(p.github){<a class="card-action" [href]="p.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
      </div>
    </article>
  }
</div>`})
export class ProjectCards{
 @Input() items:Project[]=PROJECTS;
 tilt(e:PointerEvent){if(e.pointerType==='touch')return;const el=e.currentTarget as HTMLElement;const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.setProperty('--rotate-x',((.5-y)*7)+'deg');el.style.setProperty('--rotate-y',((x-.5)*7)+'deg');el.style.setProperty('--spot-x',(x*100)+'%');el.style.setProperty('--spot-y',(y*100)+'%');}
 untilt(e:PointerEvent){const el=e.currentTarget as HTMLElement;el.style.setProperty('--rotate-x','0deg');el.style.setProperty('--rotate-y','0deg');}
}
@Component({standalone:true,imports:[DystopianHeroComponent,ProjectCards,RouterLink],template:`
<div class="hero-landscape-wrap wrap"><app-dystopian-hero /></div>
<section id="especialidades" class="wrap specialties reveal-section"><article><span>⌘</span><div><h3>Desarrollo Full Stack</h3><p>Java, Spring Boot, Angular y TypeScript</p></div></article><article><span>⬡</span><div><h3>Experiencias animadas</h3><p>Interacciones fluidas y visuales con GSAP</p></div></article><article><span>◭</span><div><h3>DevOps & Cloud</h3><p>Docker, CI/CD, AWS y Azure</p></div></article><article><span>✺</span><div><h3>Inteligencia Artificial</h3><p>Spring AI, LLM y Ollama</p></div></article></section>
<section class="wrap section reveal-section"><div class="section-heading"><div><p class="eyebrow">01 / TRABAJOS SELECCIONADOS</p><h2>EXPERIENCIAS <span>DESTACADAS</span></h2></div><a routerLink="/proyectos" class="text-link">Ver todos los proyectos ↗</a></div><app-project-cards [items]="projects"/></section>
<section id="sobre-mi" class="wrap about section reveal-section"><div><p class="eyebrow">02 / SOBRE MÍ</p><h2>INGENIERÍA CON <span>VISIÓN.</span></h2></div><div><p>Ingeniero de Sistemas con enfoque en arquitectura de software, desarrollo Full Stack, liderazgo técnico y filosofía DevOps. Me interesan los sistemas escalables, las experiencias visuales con GSAP y la incorporación responsable de inteligencia artificial.</p><div class="chips"><span>Spring WebFlux</span><span>Kafka</span><span>Docker</span><span>Microservicios</span><span>GSAP</span><span>Spring AI</span></div></div></section>
<section class="wrap contact reveal-section"><div><p class="eyebrow">03 / HABLEMOS</p><h2>¿CONSTRUIMOS ALGO <span>EXTRAORDINARIO?</span></h2><p>Disponible para conversar sobre retos de ingeniería, arquitectura y desarrollo.</p></div><a class="btn btn-primary" href="https://www.linkedin.com/in/jaimeandrestellezg/" target="_blank" rel="noopener noreferrer">Conectar en LinkedIn ↗</a></section>`})
export class Home implements AfterViewInit,OnDestroy {
 private platform=inject(PLATFORM_ID);
 private animationContext?:gsap.Context;
 ngAfterViewInit(){if(!isPlatformBrowser(this.platform)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;gsap.registerPlugin(ScrollTrigger);this.animationContext=gsap.context(()=>{
  
  
  document.querySelectorAll('.reveal-section').forEach(section=>gsap.from(section,{opacity:0,y:28,duration:1.05,ease:'power2.out',clearProps:'all',scrollTrigger:{trigger:section,start:'top 92%',once:true}}));
 });}
 ngOnDestroy(){this.animationContext?.revert();}
 projects=['vibe-comandas','wc-personal','orionixgol','videojuego3d-unity','asl-group-web'].map(slug=>PROJECTS.find(p=>p.slug===slug)!).filter(Boolean);}
@Component({standalone:true,imports:[CommonModule,ProjectCards],template:`<section class="wrap page-title"><a class="tiny orange" href="/">← VOLVER AL INICIO</a><p class="eyebrow">PORTAFOLIO / PROYECTOS</p><h1>TRABAJO QUE <em>HABLA.</em></h1><p>Explora sistemas Full Stack, experiencias interactivas, productos digitales e ingeniería de software. Filtra, inspecciona y abre demostraciones reales.</p><div class="filter-bar"><label class="search-label">⌕ <input aria-label="Buscar proyectos" type="search" placeholder="Buscar proyecto o tecnología..." [value]="search" (input)="setSearch($event)"></label>@for(f of filters;track f){<button (click)="changeFilter(f)" [class.selected]="filter===f">{{f}}</button>}</div></section><section class="wrap section listing"><p class="result-count">{{visible.length}} proyecto(s) encontrados · Mostrando {{pageItems.length}} por página</p>@if(visible.length){<app-project-cards [items]="pageItems"/><nav class="pagination" aria-label="Paginación de proyectos"><button type="button" (click)="previous()" [disabled]="page===0">← Anterior</button><span>Página {{page+1}} de {{pageCount}}</span><button type="button" (click)="next()" [disabled]="page+1>=pageCount">Siguiente →</button></nav>}@else{<p class="empty-state">Sin resultados. Prueba otro término o selecciona Todos.</p>}</section>`})
export class Projects{projects=PROJECTS;filters=['Todos','Arquitectura','Inteligencia artificial','DevOps','Full Stack','Videojuegos','Desarrollo Web'];filter='Todos';search='';page=0;pageSize=5;changeFilter(f:string){this.filter=f;this.page=0;}setSearch(e:Event){this.search=(e.target as HTMLInputElement).value;this.page=0;}get visible(){const term=this.search.toLocaleLowerCase().trim();return this.projects.filter(p=>(this.filter==='Todos'||p.category===this.filter)&&(!term||[p.name,p.description,p.category,...p.stack].join(' ').toLocaleLowerCase().includes(term)));}get pageCount(){return Math.max(1,Math.ceil(this.visible.length/this.pageSize));}get pageItems(){return this.visible.slice(this.page*this.pageSize,(this.page+1)*this.pageSize);}previous(){this.page=Math.max(0,this.page-1);}next(){this.page=Math.min(this.pageCount-1,this.page+1);}}
@Component({standalone:true,imports:[RouterLink],template:`@if(project){<section class="wrap page-title detail"><a routerLink="/proyectos" class="tiny orange">← VOLVER A PROYECTOS</a><p class="eyebrow">{{project.category.toUpperCase()}} / {{project.status.toUpperCase()}}</p><h1>{{project.name}}</h1><p>{{project.description}}</p><div class="chips">@for(tag of project.stack;track tag){<span>{{tag}}</span>}</div></section><section class="wrap details-grid"><article class="glass"><h2>DESCRIPCIÓN</h2><p>{{project.details}}</p><h2>ASPECTOS TÉCNICOS</h2><ul>@for(item of project.highlights;track item){<li>{{item}}</li>}</ul></article><aside class="glass"><span class="large-icon">{{project.icon}}</span><p class="eyebrow">ESTADO DEL PROYECTO</p><h3>{{project.status}}</h3><p>Consulta los recursos y enlaces disponibles de este proyecto.</p>@if(project.playUrl){<a class="btn btn-primary" [href]="project.playUrl" rel="noopener noreferrer" target="_blank">🎮 Jugar en línea ↗</a>}@if(project.scorersUrl){<a class="btn btn-primary" [href]="project.scorersUrl" rel="noopener noreferrer" target="_blank">⚽ Ver goleadores ↗</a>}@if(project.website){<a class="btn btn-primary" [href]="project.website" rel="noopener noreferrer" target="_blank">Visitar sitio web ↗</a>}@if(project.github){<a class="btn btn-primary" [href]="project.github" rel="noopener noreferrer" target="_blank">Ver repositorio ↗</a>}</aside></section>}@else{<section class="wrap page-title"><h1>Proyecto no encontrado</h1><a routerLink="/proyectos" class="btn btn-primary">Ver proyectos</a></section>}`})
export class ProjectDetails{private route=inject(ActivatedRoute);project=PROJECTS.find(p=>p.slug===this.route.snapshot.paramMap.get('slug'));}
