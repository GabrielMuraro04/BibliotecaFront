import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../../services/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {
  livros: any[] = [];
  filtroTitulo: string = '';

  constructor(private livroService: LivroService, private router: Router) { }

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    const url = this.filtroTitulo ? `?titulo=${encodeURIComponent(this.filtroTitulo)}` : '';
    this.livroService.listarComFiltro(this.filtroTitulo).subscribe(res => {
      this.livros = res;
    });
  }

  filtrar(): void {
    this.carregarLivros();
  }

  editarLivro(id: number) {
    this.router.navigate(['/livros', id]);
  }

  excluirLivro(id: number) {
    if (!confirm('Confirma exclusão do livro?')) return;
    this.livroService.excluir(id).subscribe(() => {
      this.carregarLivros();
    });
  }
}
