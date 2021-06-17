interface Token {
  exp: number;
  iat: number;
  email: string;
  name: string;
  id: number;
}

export type UsuarioToken = {
  [Key in keyof Token]?: Token[Key];
}
