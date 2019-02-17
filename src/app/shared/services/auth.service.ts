import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  loginStateChanged = new EventEmitter();

  getAuthHeders() {
    return {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("access_token"),
      }
    };
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('access_token') != null;
  }

  getUserName(): string {
    return localStorage.getItem('username');
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string, username: string }>('http://localhost:3000/users/api/login', { username: username, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          localStorage.setItem('username', result.username);
          this.loginStateChanged.emit();
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    this.loginStateChanged.emit();
  }
}
