import { Categoria } from './categoria.model';

export interface Livro {
  id?: number;     
  titulo: string;
  categorias: Categoria[];
}
