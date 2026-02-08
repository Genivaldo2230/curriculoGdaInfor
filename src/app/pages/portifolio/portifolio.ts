import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

// 1. Importe o tipo IconProp e os pacotes de ícones
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-portifolio',
  standalone: true,
  // 2. Adicione o RouterLink se for usá-lo no HTML futuramente
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './portifolio.html',
  styleUrls: ['./portifolio.css']
})
export class PortifolioComponent {
  imagemUrl = '/assets/images/wallpp-portifolio.jpg';
  isSkillsVisible = false;
  currentIndex = 0;

  // 3. Tipagem explícita para evitar o erro ngtsc(2322)
  habilidades: { categoria: string; itens: string; icon: IconProp }[] = [
    { categoria: 'Linguagens', itens: 'JAVA | JAVA-SCRIPT | TYPESCRIPT', icon: faCoffee }, // Java = café ☕
    { categoria: 'Frontend', itens: 'ANGULAR CLI', icon: ['fab', 'angular'] },
    { categoria: 'Backend', itens: 'SPRING-BOOT | NODE.JS | REACT.JS ', icon: ['fas', 'server'] },
    { categoria: 'Banco de Dados', itens: 'SQL | MySQL | ORACLE | POSTGRE.SQL', icon: ['fas', 'database'] },
    { categoria: 'Mobile', itens: 'ANDROID, |, REACT NATIVE', icon: ['fas', 'mobile-alt'] },
    { categoria: 'DevOps', itens: 'DOCKER | GIT | REST | APIs', icon: ['fab', 'docker'] }
  ];

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }

  toggleSkills() {
    this.isSkillsVisible = !this.isSkillsVisible;
  }

  proximo() {
    this.currentIndex = (this.currentIndex + 1) % this.habilidades.length;
  }

  anterior() {
    this.currentIndex = (this.currentIndex - 1 + this.habilidades.length) % this.habilidades.length;
  }
}