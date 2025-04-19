import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app/app.component';
import { provideRouter }        from '@angular/router';
import { importProvidersFrom }  from '@angular/core';
import { MatToolbarModule }     from '@angular/material/toolbar';
import { MatButtonModule }      from '@angular/material/button';
import { routes }               from './app/app.routes';

import { signal } from '@angular/core';

const dark = signal(false);
document.body.classList.toggle('dark-theme', dark());


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(MatToolbarModule, MatButtonModule)
  ]
}).catch(err => console.error(err));
