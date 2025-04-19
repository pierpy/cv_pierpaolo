import { Routes } from '@angular/router';
import { HomeComponent }         from './pages/home/home.component';
import { BioComponent }          from './pages/bio/bio.component';
import { PublicationsComponent } from './pages/pubblications/publications.component';
import { TeachingComponent }     from './pages/teaching/teaching.component';
import { ContactComponent }      from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '',           component: HomeComponent },
  { path: 'bio',        component: BioComponent },
  { path: 'pubblicazioni', component: PublicationsComponent },
  { path: 'didattica',  component: TeachingComponent },
  { path: 'contatto',   component: ContactComponent },
  { path: '**', redirectTo: '' }          // fallback 404→home
];