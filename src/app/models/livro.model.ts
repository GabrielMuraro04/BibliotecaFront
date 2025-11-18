import { Categoria } from './categoria.model';

export interface Livro {
  id?: number;
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
  categorias: Categoria[];
}

