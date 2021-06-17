import { UsuarioService } from './usuario.service';
import { baseUrl } from '../../../baseUrl';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface RequestData {
  usuario: string;
  senha: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _usuarioService: UsuarioService
  ) {}

  autenticar({ usuario, senha }: RequestData): Observable<HttpResponse<any>> {
    return this._httpClient
      .post(
        `${baseUrl}/user/login`,
        {
          userName: usuario,
          password: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this._usuarioService.salvaToken(authToken);
        })
      );
  }
}
