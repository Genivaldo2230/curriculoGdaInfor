import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomerComponent } from '../homer/homer';

@Component({
  selector: 'app-skills-carousel',
  templateUrl: './skills-carousel.html',
  styleUrls: ['./skills-carousel.css'],
  imports: [CommonModule]
})
export class SkillsCarouselComponent implements OnInit {
  skills = [
    { icon: 'assets/icons/communication.png', title: 'Comunicação eficaz', description: 'Clareza na troca de ideias e colaboração em equipe.' },
    { icon: 'assets/icons/trabEquipe.png', title: 'Trabalho em equipe', description: 'Capacidade de cooperar em projetos multidisciplinares.' },
    { icon: 'assets/icons/angular.svg', title: 'Angular', description: 'Desenvolvimento de interfaces modernas e responsivas.' },
    { icon: 'assets/icons/java.svg', title: 'Java', description: 'Linguagem sólida para aplicações corporativas e sistemas complexos.' }
  ];

  currentIndex = 0;
  timer: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  startAutoPlay() {
    this.timer = setInterval(() => {
      this.nextSkill();
    }, 3000); // 3000ms = 3 segundos
  }

  nextSkill() {
    this.currentIndex = (this.currentIndex + 1) % this.skills.length;
  }

  prevSkill() {
    clearInterval(this.timer);
    this.currentIndex = (this.currentIndex - 1 + this.skills.length) % this.skills.length;
  }

  selectSkill(index: number) {
    clearInterval(this.timer); // Para o auto-play se o usuário interagir
    this.currentIndex = index;
    // Opcional: reiniciar o timer após um tempo
    this.startAutoPlay();
  }
}
