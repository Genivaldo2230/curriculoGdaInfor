import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-curriculum',
  imports: [RouterLink ,FontAwesomeModule,],
  templateUrl: './curriculum.html',
  styleUrls: ['./curriculum.css'],   // ✅ correto
  standalone: true,
})
export class Curriculum {
  imagemUrl = '/assets/imagens/maoNoEcra.jpg';
}
