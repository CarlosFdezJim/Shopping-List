import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Verificar si el usuario ha iniciado sesión
    this.loggedIn = this.authService.isLoggedIn();
  }

}
