import { usuarioSenhaIguaisValidator } from './validators/usuario-senha-iguais.validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { Router } from '@angular/router';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './validators/minusculo.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _novoUsuarioService: NovoUsuarioService,
    private readonly _usuarioExisteService: UsuarioExisteService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this._formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [minusculoValidator],
          [this._usuarioExisteService.usuarioJaExiste()],
        ],
        password: ['', [Validators.required]],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar(): void {
    if ( this.novoUsuarioForm.invalid ) {
      alert('Formulario inválido');
      return;
    };

    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;

    this._novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() => {
      this._router.navigateByUrl('');
    });
  }
}
