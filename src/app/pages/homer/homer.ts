import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar';

// Se você tiver outros componentes no Homer, importe-os:
// import { Footer } from '../footer/footer';

@Component({
  selector: 'app-homer',
  standalone: true,
  imports: [CommonModule], // só o que realmente usa
  templateUrl: './homer.html',
  styleUrls: ['./homer.css']
})
export class HomerComponent {

    imagemUrl = '/assets/imagens/maoNoEcra.jpg';
}
