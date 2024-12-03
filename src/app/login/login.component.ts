import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Añade FormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'paco' && this.password === '123') {
      this.router.navigate(['/gallery']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login incorrecto',
        text: 'Por favor verifica tus credenciales',
        showConfirmButton: true,
      });
    }
  }
}
