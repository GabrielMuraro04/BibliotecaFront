export interface Categoria {
  id: number;
  nome: string;
}

export interface Livro {
  id?: number;
  titulo: string;
  autor?: string;
  ano?: number;
  categorias: Categoria[];
}
