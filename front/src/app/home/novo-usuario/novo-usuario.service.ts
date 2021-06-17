import { baseUrl } from './../../../baseUrl';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private readonly _httpClient: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this._httpClient.post(`${baseUrl}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<boolean> {
    return this._httpClient.get<boolean>(
      `${baseUrl}/user/exists/${nomeUsuario}`
    );
  }
}
