import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthUser, findUserByEmail } from './users';

const SESSION_KEY = 'xentra.session';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _user = signal<AuthUser | null>(null);
  readonly user = this._user.asReadonly();

  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) {
        try { this._user.set(JSON.parse(raw) as AuthUser); }
        catch { localStorage.removeItem(SESSION_KEY); }
      }
    }
  }

  isAuthenticated(): boolean {
    return this._user() !== null;
  }

  currentUser(): AuthUser | null {
    return this._user();
  }

  findUser(email: string): AuthUser | undefined {
    return findUserByEmail(email);
  }

  login(email: string): AuthUser | null {
    const user = findUserByEmail(email);
    if (!user) return null;
    this._user.set(user);
    if (this.isBrowser) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return user;
  }

  logout(): void {
    this._user.set(null);
    if (this.isBrowser) localStorage.removeItem(SESSION_KEY);
  }
}
