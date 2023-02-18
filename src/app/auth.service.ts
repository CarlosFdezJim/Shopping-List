import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public loggedIn: boolean = false;

  constructor() { }

  login(): boolean {
    return this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  updateLoggedIn(value: boolean): void {
    this.loggedIn = value;
  }

  getUser(): any {
    // aquí puedes obtener información del usuario actual
    // por ejemplo, desde una API o un almacenamiento local
    return { username: 'Carlos Fdez', email: 'carlosfdezjim@gmail.com' };
  }
}
