import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RequestData {
  usuario: string;
  senha: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(
    private readonly _httpClient: HttpClient
  ) {}

  autenticar({ usuario, senha }: RequestData): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/user/login`, {
      userName: usuario,
      password: senha,
    });
  }
}
