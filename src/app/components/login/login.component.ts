import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
  username: string = '';
  password: string = '';


  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.username === '' && this.password === '') {
      this.authService.login();
      this.router.navigate(['/home']);
    }else{
      // Mostrar mensaje de error al usuario
      console.log("No entras");
    }
  }
}
