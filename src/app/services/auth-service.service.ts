import { Injectable } from '@angular/core';
import  { Router } from '@angular/router'

// auth.service.ts

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN_KEY = 'jwtToken';

  constructor(private router: Router) { }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN_KEY);
  }

  setJwtToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN_KEY, token)
    this.router.navigate(['/home']); 
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN_KEY);
    this.router.navigate(['/login']); // Redirect to the login page after logout
  }
}
