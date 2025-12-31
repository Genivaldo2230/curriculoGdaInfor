import { Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato';
import { Curriculum } from './pages/curriculum/curriculum';
import { FaleComigoComponent } from './pages/fale-comigo/fale-comigo';
import { Footer } from './pages/footer/footer';
import { Header } from './pages/header/header';
import { HomerComponent as Homer} from './pages/homer/homer';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos';
import { Portifolio } from './pages/portifolio/portifolio';

export const routes: Routes = [
  { path: 'contato', component: ContatoComponent },
  { path: 'curriculum', component: Curriculum},
  { path: 'fale-comigo', component: FaleComigoComponent },
  { path: 'footer', component: Footer },
  { path: 'header', component: Header },
  { path: 'home', component: Homer },
  { path: 'lista-contatos', component: ListaContatosComponent },
  { path: 'portifolio', component: Portifolio },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
