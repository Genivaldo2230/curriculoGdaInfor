import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

import { ContatoComponent } from './pages/contato/contato';
import { FaleComigoComponent } from './pages/fale-comigo/fale-comigo';
import { Footer } from './pages/footer/footer';
import { Header } from './pages/header/header';
import { HomerComponent as Homer } from './pages/homer/homer';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos';
import { PortifolioComponent } from './pages/portifolio/portifolio';
import { SobreComponent } from './pages/sobre/sobre';
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: Homer
  },

  {
    path: 'lista-contatos',
    component: ListaContatosComponent,
    canActivate: [authGuard]
  },

  {
    path: 'sobre',
    component: SobreComponent
  },

  {
    path: 'fale-comigo',
    component: FaleComigoComponent
  },

  {
    path: 'footer',
    component: Footer
  },

  {
    path: 'header',
    component: Header
  },

  {
    path: 'portifolio',
    component: PortifolioComponent
  },

  {
    path: 'contato',
    component: ContatoComponent
  }
];
