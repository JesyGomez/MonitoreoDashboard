import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export default class LoginComponent {

  imagePath: string = "images/DMonitoreo.png";
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}  

  // Función para iniciar sesión y redirigir al dashboard
  onLogin(...args: []) {
    if (this.username === 'usuario1' && this.password === '1234') {
      // Navega al dashboard si las credenciales son correctas
      this.router.navigate(['/app/dashboard']);
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }

  // Función para mostrar u ocultar la contraseña
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  get backgroundStyle() {
    return {
      'background': `
        linear-gradient(to bottom, rgba(51, 163, 170, 0.7), rgba(16, 112, 118, 0.7)),
        url(${this.imagePath})`,
      'background-size': 'cover', 
      'background-position': 'right',
      'height': '100%',
      'width': '100%',
      'background-repeat': 'no-repeat'
    };
  }
}