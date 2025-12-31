import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';   // ou './app/app.component' se renomear o arquivo
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import 'zone.js'; // Garanta que isso esteja lá

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),   // <-- registra HttpClient
    provideRouter(routes)  // <-- ativa rotas
  ]
});
