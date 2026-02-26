import { Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato';
import { FaleComigoComponent } from './pages/fale-comigo/fale-comigo';
import { Footer } from './pages/footer/footer';
import { Header } from './pages/header/header';
import { HomerComponent as Homer} from './pages/homer/homer';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos';
import { PortifolioComponent } from './pages/portifolio/portifolio';
import { SobreComponent } from './pages/sobre/sobre';


export const routes: Routes = [
  // { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'fale-comigo', component: FaleComigoComponent },
  { path: 'footer', component: Footer },
  { path: 'header', component: Header },
  { path: 'home', component: Homer },
  { path: 'lista-contatos', component: ListaContatosComponent },
  { path: 'portifolio', component: PortifolioComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
