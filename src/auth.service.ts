import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginStatus$ = new BehaviorSubject(false);

  constructor() {}

  login(): void {
    this.loginStatus$.next(true);
  }

  logout(): void {
    this.loginStatus$.next(false);
  }

  loginStatus(): Observable<boolean> {
    return this.loginStatus$.asObservable();
  }
}
