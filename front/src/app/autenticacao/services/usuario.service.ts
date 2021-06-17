import { UsuarioToken } from './../models/usuarioToken';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private _usuario$ = new BehaviorSubject<UsuarioToken>({});

  constructor(private readonly _tokenService: TokenService) {
    if (this._tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this._tokenService.retornaToken();
    const usuario = jwtDecode(token) as UsuarioToken;

    this._usuario$.next(usuario);
  }

  retornaUsuario(): Observable<UsuarioToken> {
    return this._usuario$.asObservable();
  }

  salvaToken(token: string): void {
    this._tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(): void {
    this._tokenService.excluirToken();
    this._usuario$.next({});
  }

  estaLogado(): boolean {
    return this._tokenService.possuiToken();
  }
}
