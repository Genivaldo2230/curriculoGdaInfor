import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common'; // Para usar diretivas básicas como *ngIf, etc.
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa a biblioteca de ícones
import { faLinkedin, faGithub, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // removi RouterLink
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer implements OnInit { // Mantendo o nome da classe como 'Footer'

  // 1. Variáveis para Data Binding (URLs e Ano)
  currentYear: number = new Date().getFullYear();

  // IMPORTANTE: Substitua os placeholders pelas suas URLs reais!
  private phoneNumber = '+5511960920552'; // Seu número completo (País + DDD + Número)

  whatsappUrl: string = `https://wa.me/${this.phoneNumber}`;
  linkedinUrl: string = 'https://www.linkedin.com/in/genivaldo-anjos/';
  githubUrl: string = 'https://github.com/Genivaldo2230';
  youtubeUrl: string = 'https://www.youtube.com/@genivaldoalvesdosanjos';
  emailUrl: string = 'mailto:genivaldo@example.com';

  constructor(library: FaIconLibrary) {
    library.addIcons(faLinkedin, faGithub, faWhatsapp, faEnvelope, faYoutube);

  }

  ngOnInit(): void {
    // A inicialização aqui é simples, mas garante que o ano esteja sempre correto.
    // Você pode adicionar qualquer lógica de inicialização do rodapé aqui.
  }

  // Você pode adicionar métodos aqui, se necessário (ex: rastreamento de cliques)

}

