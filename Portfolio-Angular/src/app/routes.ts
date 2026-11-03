import { Routes } from '@angular/router';
import { Home, Projects, ProjectDetails } from './views';
export const routes:Routes=[{path:'',component:Home,title:'Inicio | Jaime Andres Tellez G.'},{path:'proyectos',component:Projects,title:'Proyectos | Jaime Andres Tellez G.'},{path:'proyectos/:slug',component:ProjectDetails,title:'Detalle de proyecto | Jaime Andres Tellez G.'},{path:'**',redirectTo:''}];
