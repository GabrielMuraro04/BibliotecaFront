import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../../../services/livro.service';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  form!: FormGroup;
  categorias: any[] = [];
  editingId?: number;

  constructor(
    private fb: FormBuilder,
    private livroService: LivroService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      autor: [''],
      ano: [null],
      categoriasIds: [[]]
    });

    this.categoriaService.listar().subscribe({
      next: (cats) => {
        this.categorias = cats.map((c: any) => ({
          label: c.nome,
          value: c.id
        }));
      }
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editingId = +id;
      this.carregarLivro(this.editingId);
    }
  }

  carregarLivro(id: number) {
    this.livroService.buscarPorId(id).subscribe(livro => {
      this.form.patchValue({
        titulo: livro.titulo,
        autor: livro.autor,
        ano: livro.ano,
        categoriasIds: livro.categorias.map((c: any) => c.id)
      });
    });
  }

  salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const dados = this.form.value;

    if (this.editingId) {
      this.livroService.atualizar(this.editingId, dados).subscribe(() => {
        this.router.navigate(['/livros']);
      });
    } else {
      this.livroService.criar(dados).subscribe(() => {
        this.router.navigate(['/livros']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/livros']);
  }

  mudarCat() {
    const selecionadas = this.form.value.categoriasIds;

    if (selecionadas.length > 3) {
      selecionadas.pop();
      this.form.patchValue({ categoriasIds: selecionadas });
      alert("Você só pode escolher até 3 categorias!");
    }
  }

}
