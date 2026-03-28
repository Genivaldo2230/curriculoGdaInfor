import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sobre',
  imports: [FontAwesomeModule,],
  templateUrl: './sobre.html',
  styleUrls: ['./sobre.css'],   // ✅ correto
  standalone: true,
})
export class SobreComponent {
  imagemUrl = '/assets/images/fundo.jpg';

}
