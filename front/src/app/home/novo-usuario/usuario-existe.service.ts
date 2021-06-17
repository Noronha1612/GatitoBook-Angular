import { first, map, switchMap } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private readonly _novoUsuarioService: NovoUsuarioService) {}

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(
          switchMap((nomeUsuario) =>
            this._novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
          ),
          map((usuarioExiste) => (usuarioExiste ? { usuario: true } : null)),
          first()
        )
    };
  }
}
