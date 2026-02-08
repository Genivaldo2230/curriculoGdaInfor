import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
ngOnInit() {
  const video = document.getElementById('backgroundVideo') as HTMLVideoElement;
  if (window.innerWidth < 768) {
    video.style.objectFit = 'contain';
  } else {
    video.style.objectFit = 'cover';
  }
}

  // // Se for vídeo
  //  videoUrl: string = 'assets/videos/fundo.mp4';

  //  // Se for imagem
  // imgUrl: string = '../../../assets/images/wallpp-portifolio.jpg';

}
