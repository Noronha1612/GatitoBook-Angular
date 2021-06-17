import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/services/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  user$ = this._usuarioService.retornaUsuario();

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) {}

  logout(): void {
    return this._usuarioService.logout();
  }
}
