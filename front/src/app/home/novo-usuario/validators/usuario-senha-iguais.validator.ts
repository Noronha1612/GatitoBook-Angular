import { FormGroup } from '@angular/forms';

export const usuarioSenhaIguaisValidator = (formGroup: FormGroup) => {
  const usuario = formGroup.get('userName')?.value ?? '';
  const senha = formGroup.get('password')?.value ?? '';

  return usuario.trim() === senha.trim() ? { usuarioSenhaIguais: true } : null;
};
