import { Routes } from '@angular/router';
import { Home, Projects, ProjectDetails } from './views';
// Los títulos son claves i18n resueltas por I18nTitleStrategy.
export const routes:Routes=[{path:'',component:Home,title:'title.home'},{path:'proyectos',component:Projects,title:'title.projects'},{path:'proyectos/:slug',component:ProjectDetails,title:'title.projectDetail'},{path:'**',redirectTo:''}];
