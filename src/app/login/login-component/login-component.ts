import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export default class LoginComponent {

  imagePath: string = "images/DMonitoreo.png";
  // imageWidth: string = '100%'; 
  // imageHeight: string = '100%';

  get backgroundStyle() {
    return {
      'background': `
        linear-gradient(to bottom, rgba(51, 163, 170, 0.7), rgba(16, 112, 118, 0.7)),
        url(${this.imagePath})`,
      'background-size': 'cover', // Cambia 'contain' a 'cover'
      'background-position': 'right', // Cambia 'right' a 'center'
      'height': '100%',
      'width': '100%',
      'background-repeat': 'no-repeat' // Asegúrate de que no se repita
    };
  }
}