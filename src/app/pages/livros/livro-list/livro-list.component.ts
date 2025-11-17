import { Component } from '@angular/core';
import { LivroService } from '../../../services/livro.service';
import { Livro } from '../../../models/livro.model';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent {

  livros: Livro[] = [];
  filtroTitulo: string = '';

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros() {
    this.livroService.listar().subscribe((resultado) => {
      this.livros = resultado;
    });
  }

  filtrar() {
    this.carregarLivros();
  }

  excluirLivro(id: number) {
    this.livroService.excluir(id).subscribe(() => {
      this.carregarLivros();
    });
  }
}
