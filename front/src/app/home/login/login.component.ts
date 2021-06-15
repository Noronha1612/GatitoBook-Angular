import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private readonly _autenticacaoService: AutenticacaoService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    this._autenticacaoService
      .autenticar({
        usuario: this.usuario,
        senha: this.senha,
      })
      .subscribe({
        next: () => this._router.navigateByUrl('animais'),
        error: () => alert('Usuário ou senha inválido(a)'),
      });
  }
}
