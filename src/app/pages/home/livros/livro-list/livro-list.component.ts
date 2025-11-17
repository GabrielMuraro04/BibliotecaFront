import { Component } from '@angular/core';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent {

  livros: any[] = [];

  filtroTitulo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros() {
    this.livros = [];
  }

  filtrar() {
    console.log("Buscando com filtro:", this.filtroTitulo);
  }

  editarLivro(id: number) {
    console.log("Editar livro", id);
  }

  excluirLivro(id: number) {
    console.log("Excluir livro", id);
  }
}
