import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Mantenha apenas se houver links no portifolio.html

// Remova imports de outros componentes de página ou fixos (Homer, Footer, Curriculum, FaleComigoComponent)

@Component({
  selector: 'app-portifolio',
  standalone: true, // Adicionei 'standalone: true' se ainda não estava, para seguir o padrão
  // Mantenha RouterLink e RouterLinkActive APENAS se houver links de navegação no portifolio.html
  // Caso contrário, use imports: []
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './portifolio.html',
  styleUrl: './portifolio.css',
})
export class Portifolio {

}
