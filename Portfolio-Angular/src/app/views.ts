import { Component, inject, Input, AfterViewInit, OnDestroy, PLATFORM_ID, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DystopianHeroComponent } from './components/dystopian-hero/dystopian-hero.component';
import { PROJECTS,Project,localizeProject } from './projects';
import { I18nService } from './i18n/i18n.service';
import { ACTIVE_TECH_GROUPS, PORTFOLIO_CONFIG, VERIFIED_BADGES } from './portfolio.config';
@Component({selector:'app-project-cards',standalone:true,imports:[RouterLink],template:`
<div class="projects-grid">
  @for(raw of items;track raw.slug){
    @let p = localize(raw);
    <article class="project-card" (pointermove)="tilt($event)" (pointerleave)="untilt($event)">
      <div class="card-icon">{{p.icon}}</div>
      <div class="card-info">
        <div class="tiny orange">{{i18n.tDynamic('category.'+p.category)}} · {{i18n.tDynamic('status.'+p.status)}}</div>
        <h3>{{p.name}}</h3>
        <p>{{p.description}}</p>
        <div class="chips">@for(t of p.stack.slice(0,4);track t){<span>{{t}}</span>}</div>
      </div>
      <div class="project-links">
        <a class="card-action" [routerLink]="['/proyectos',p.slug]">{{i18n.t('card.view')}}</a>
        @if(p.playUrl){<a class="card-action action-play" [href]="p.playUrl" target="_blank" rel="noopener noreferrer">{{i18n.t('card.play')}}</a>}
        @if(p.scorersUrl){<a class="card-action action-play" [href]="p.scorersUrl" target="_blank" rel="noopener noreferrer">{{i18n.t('card.scorers')}}</a>}
        @if(p.website){<a class="card-action" [href]="p.website" target="_blank" rel="noopener noreferrer">{{i18n.t('card.web')}}</a>}
        @if(p.github){<a class="card-action" [href]="p.github" target="_blank" rel="noopener noreferrer">{{i18n.t('card.github')}}</a>}
      </div>
    </article>
  }
</div>`})
export class ProjectCards{
 readonly i18n=inject(I18nService);
 @Input() items:Project[]=PROJECTS;
 localize(p:Project){return localizeProject(p,this.i18n.lang());}
 tilt(e:PointerEvent){if(e.pointerType==='touch')return;const el=e.currentTarget as HTMLElement;const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.setProperty('--rotate-x',((.5-y)*7)+'deg');el.style.setProperty('--rotate-y',((x-.5)*7)+'deg');el.style.setProperty('--spot-x',(x*100)+'%');el.style.setProperty('--spot-y',(y*100)+'%');}
 untilt(e:PointerEvent){const el=e.currentTarget as HTMLElement;el.style.setProperty('--rotate-x','0deg');el.style.setProperty('--rotate-y','0deg');}
}
@Component({standalone:true,imports:[DystopianHeroComponent,ProjectCards,RouterLink],template:`
<div class="hero-landscape-wrap wrap"><app-dystopian-hero /></div>
<section id="especialidades" class="wrap specialties reveal-section"><article><span>⌘</span><div><h3>{{i18n.t('spec.fullstack.title')}}</h3><p>{{i18n.t('spec.fullstack.text')}}</p></div></article><article><span>⬡</span><div><h3>{{i18n.t('spec.motion.title')}}</h3><p>{{i18n.t('spec.motion.text')}}</p></div></article><article><span>◭</span><div><h3>{{i18n.t('spec.devops.title')}}</h3><p>{{i18n.t('spec.devops.text')}}</p></div></article><article><span>✺</span><div><h3>{{i18n.t('spec.ai.title')}}</h3><p>{{i18n.t('spec.ai.text')}}</p></div></article></section>
<section class="wrap section reveal-section"><div class="section-heading"><div><p class="eyebrow">{{i18n.t('home.work.eyebrow')}}</p><h2>{{i18n.t('home.work.title')}}<span>{{i18n.t('home.work.titleSpan')}}</span></h2></div><a routerLink="/proyectos" class="text-link">{{i18n.t('home.work.all')}}</a></div><app-project-cards [items]="projects"/></section>
<section id="sobre-mi" class="wrap about section reveal-section"><div><p class="eyebrow">{{i18n.t('home.about.eyebrow')}}</p><h2>{{i18n.t('home.about.title')}}<span>{{i18n.t('home.about.titleSpan')}}</span></h2></div><div><p>{{i18n.t('home.about.text')}}</p><div class="chips"><span>Spring WebFlux</span><span>Kafka</span><span>Docker</span><span>{{i18n.t('chip.microservices')}}</span><span>GSAP</span><span>Spring AI</span></div></div></section>
@if(techGroups.length){
<section id="stack" class="wrap section tech-stack reveal-section"><div class="section-heading"><div><p class="eyebrow">{{i18n.t('home.stack.eyebrow')}}</p><h2>{{i18n.t('home.stack.title')}}<span>{{i18n.t('home.stack.titleSpan')}}</span></h2></div></div>
<dl class="tech-groups">@for(g of techGroups;track g.category){<div class="tech-group"><dt>{{i18n.tDynamic('stack.cat.'+g.category)}}</dt><dd><ul class="tech-tiles" role="list">@for(tech of g.items;track tech.name){<li class="tech-tile"><span class="tech-icon" aria-hidden="true">@if(tech.logoUrl){<img [src]="tech.logoUrl" alt="" width="38" height="38" loading="lazy" decoding="async">}@else{<span class="tech-abbr">{{tech.abbr}}</span>}</span><span class="tech-name">{{i18n.lang()==='es'&&tech.nameEs?tech.nameEs:tech.name}}</span></li>}</ul></dd></div>}</dl></section>
}
@if(badges.length){
<section id="certificaciones" class="wrap section credly reveal-section"><div class="section-heading"><div><p class="eyebrow">{{i18n.t('home.badges.eyebrow')}}</p><h2>{{i18n.t('home.badges.title')}}<span>{{i18n.t('home.badges.titleSpan')}}</span></h2></div>@if(credlyProfileUrl){<a class="text-link" [href]="credlyProfileUrl" target="_blank" rel="noopener noreferrer">{{i18n.t('home.badges.profile')}}</a>}</div>
<div class="badge-grid">@for(b of badges;track b.id){<article class="badge-card"><img [src]="b.imageUrl" [alt]="i18n.t('home.badges.imgAlt',{title:b.title,issuer:b.issuer})" width="140" height="140" loading="lazy" decoding="async" referrerpolicy="no-referrer"><div class="badge-info"><h3>{{b.title}}</h3><p class="tiny">{{b.issuer}}</p><p class="badge-date">{{i18n.t('home.badges.issued')}} · <time [attr.datetime]="b.issuedDate">{{formatDate(b.issuedDate)}}</time></p><a class="card-action" [href]="b.verificationUrl" target="_blank" rel="noopener noreferrer">{{i18n.t('home.badges.verify')}}</a></div></article>}</div></section>
}
<section class="wrap contact reveal-section"><div><p class="eyebrow">{{i18n.t('home.contact.eyebrow')}}</p><h2>{{i18n.t('home.contact.title')}}<span>{{i18n.t('home.contact.titleSpan')}}</span></h2><p>{{i18n.t('home.contact.text')}}</p></div><a class="btn btn-primary" href="https://www.linkedin.com/in/jaimeandrestellezg/" target="_blank" rel="noopener noreferrer">{{i18n.t('home.contact.cta')}}</a></section>`})
export class Home implements AfterViewInit,OnDestroy {
 private platform=inject(PLATFORM_ID);
 readonly i18n=inject(I18nService);
 private animationContext?:gsap.Context;
 readonly techGroups=ACTIVE_TECH_GROUPS;
 readonly badges=VERIFIED_BADGES;
 readonly credlyProfileUrl=PORTFOLIO_CONFIG.credlyProfileUrl;
 formatDate(ym:string){const [y,m]=ym.split('-').map(Number);return new Intl.DateTimeFormat(this.i18n.locale(),{month:'short',year:'numeric'}).format(new Date(y,m-1,1));}
 ngAfterViewInit(){if(!isPlatformBrowser(this.platform)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;gsap.registerPlugin(ScrollTrigger);this.animationContext=gsap.context(()=>{
  document.querySelectorAll('.reveal-section').forEach(section=>gsap.from(section,{opacity:0,y:28,duration:1.05,ease:'power2.out',clearProps:'all',scrollTrigger:{trigger:section,start:'top 92%',once:true}}));
 });}
 ngOnDestroy(){this.animationContext?.revert();}
 projects=['vibe-comandas','wc-personal','orionixgol','videojuego3d-unity','asl-group-web'].map(slug=>PROJECTS.find(p=>p.slug===slug)!).filter(Boolean);}
@Component({standalone:true,imports:[CommonModule,ProjectCards],template:`<section class="wrap page-title"><a class="tiny orange" href="/">{{i18n.t('list.back')}}</a><p class="eyebrow">{{i18n.t('list.eyebrow')}}</p><h1>{{i18n.t('list.title')}}<em>{{i18n.t('list.titleEm')}}</em></h1><p>{{i18n.t('list.lead')}}</p><div class="filter-bar"><label class="search-label">⌕ <input [attr.aria-label]="i18n.t('list.searchAria')" type="search" [placeholder]="i18n.t('list.searchPlaceholder')" [value]="search" (input)="setSearch($event)"></label>@for(f of filters;track f){<button (click)="changeFilter(f)" [class.selected]="filter===f">{{i18n.tDynamic('category.'+f)}}</button>}</div></section><section class="wrap section listing"><p class="result-count">{{i18n.t('list.count',{count:visible.length,size:pageItems.length})}}</p>@if(visible.length){<app-project-cards [items]="pageItems"/><nav class="pagination" [attr.aria-label]="i18n.t('list.paginationAria')"><button type="button" (click)="previous()" [disabled]="page===0">{{i18n.t('list.prev')}}</button><span>{{i18n.t('list.page',{page:page+1,total:pageCount})}}</span><button type="button" (click)="next()" [disabled]="page+1>=pageCount">{{i18n.t('list.next')}}</button></nav>}@else{<p class="empty-state">{{i18n.t('list.empty')}}</p>}</section>`})
export class Projects{readonly i18n=inject(I18nService);projects=PROJECTS;filters=['Todos','Arquitectura','Inteligencia artificial','DevOps','Full Stack','Videojuegos','Desarrollo Web'];filter='Todos';search='';page=0;pageSize=5;changeFilter(f:string){this.filter=f;this.page=0;}setSearch(e:Event){this.search=(e.target as HTMLInputElement).value;this.page=0;}get visible(){const term=this.search.toLocaleLowerCase().trim();const lang=this.i18n.lang();return this.projects.filter(raw=>{const p=localizeProject(raw,lang);return (this.filter==='Todos'||raw.category===this.filter)&&(!term||[p.name,p.description,raw.category,this.i18n.tDynamic('category.'+raw.category),...p.stack].join(' ').toLocaleLowerCase().includes(term));});}get pageCount(){return Math.max(1,Math.ceil(this.visible.length/this.pageSize));}get pageItems(){return this.visible.slice(this.page*this.pageSize,(this.page+1)*this.pageSize);}previous(){this.page=Math.max(0,this.page-1);}next(){this.page=Math.min(this.pageCount-1,this.page+1);}}
@Component({standalone:true,imports:[RouterLink],template:`@if(project();as project){<section class="wrap page-title detail"><a routerLink="/proyectos" class="tiny orange">{{i18n.t('detail.back')}}</a><p class="eyebrow">{{i18n.tDynamic('category.'+project.category).toUpperCase()}} / {{i18n.tDynamic('status.'+project.status).toUpperCase()}}</p><h1>{{project.name}}</h1><p>{{project.description}}</p><div class="chips">@for(tag of project.stack;track tag){<span>{{tag}}</span>}</div></section><section class="wrap details-grid"><article class="glass"><h2>{{i18n.t('detail.description')}}</h2><p>{{project.details}}</p><h2>{{i18n.t('detail.highlights')}}</h2><ul>@for(item of project.highlights;track item){<li>{{item}}</li>}</ul></article><aside class="glass"><span class="large-icon">{{project.icon}}</span><p class="eyebrow">{{i18n.t('detail.status')}}</p><h3>{{i18n.tDynamic('status.'+project.status)}}</h3><p>{{i18n.t('detail.resources')}}</p>@if(project.playUrl){<a class="btn btn-primary" [href]="project.playUrl" rel="noopener noreferrer" target="_blank">{{i18n.t('detail.play')}}</a>}@if(project.scorersUrl){<a class="btn btn-primary" [href]="project.scorersUrl" rel="noopener noreferrer" target="_blank">{{i18n.t('detail.scorers')}}</a>}@if(project.website){<a class="btn btn-primary" [href]="project.website" rel="noopener noreferrer" target="_blank">{{i18n.t('detail.web')}}</a>}@if(project.github){<a class="btn btn-primary" [href]="project.github" rel="noopener noreferrer" target="_blank">{{i18n.t('detail.repo')}}</a>}</aside></section>}@else{<section class="wrap page-title"><h1>{{i18n.t('detail.notFound')}}</h1><a routerLink="/proyectos" class="btn btn-primary">{{i18n.t('detail.viewProjects')}}</a></section>}`})
export class ProjectDetails{private route=inject(ActivatedRoute);readonly i18n=inject(I18nService);private raw=PROJECTS.find(p=>p.slug===this.route.snapshot.paramMap.get('slug'));readonly project=computed(()=>this.raw?localizeProject(this.raw,this.i18n.lang()):undefined);}
