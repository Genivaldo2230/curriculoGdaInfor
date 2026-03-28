import { Component, AfterViewInit, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-homer',
  templateUrl: './homer.html',
  styleUrls: ['./homer.css'],
  imports: [RouterLink],

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
