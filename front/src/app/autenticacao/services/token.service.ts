import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  retornaToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  excluirToken(): void {
    localStorage.removeItem(KEY);
  }

  possuiToken(): boolean {
    return !!this.retornaToken();
  }
}
