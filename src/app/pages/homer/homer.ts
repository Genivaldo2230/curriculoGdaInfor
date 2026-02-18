import { Component, AfterViewInit, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SkillsCarouselComponent } from '../skills-carousel/skills-carousel';

@Component({
  selector: 'app-homer',
  templateUrl: './homer.html',
  styleUrls: ['./homer.css'],
  imports: [SkillsCarouselComponent]
})
export class HomerComponent implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    // Só roda no navegador, nunca no SSR
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(this.el.nativeElement, 'ativo');
    }
  }
}
