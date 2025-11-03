import type Postagem from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  foto: string;
  usuario: string;
  senha: string;
  psotagem?: Postagem[] | null;
}
