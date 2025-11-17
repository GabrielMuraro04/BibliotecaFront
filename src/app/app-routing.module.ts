import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LivroListComponent } from './pages/livros/livro-list/livro-list.component';
import { LivroFormComponent } from './pages/livros/livro-form/livro-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livros', component: LivroListComponent },
  { path: 'livros/novo', component: LivroFormComponent },
  { path: 'livros/editar/:id', component: LivroFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
