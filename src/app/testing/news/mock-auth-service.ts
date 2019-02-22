import { EventEmitter } from '@angular/core';

export class MockAuthService {
  private username?: string;

  loginStateChanged = new EventEmitter();

  isLoggedIn(): boolean {
    return !!this.username;
  }

  getUserName(): string {
    return this.username;
  }

  login(username?: string) {
    this.username = username;
  }
}
