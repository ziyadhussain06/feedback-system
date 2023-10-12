import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'company', password: 'company', role: 'company' },
    { username: 'branch', password: 'branch', role: 'branch' }
  ];
  private currentUser: any | null = null;

  constructor() { }

  login(username: string, password: string) {
    this.currentUser = this.users.find(user => user.username === username && user.password === password);
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
