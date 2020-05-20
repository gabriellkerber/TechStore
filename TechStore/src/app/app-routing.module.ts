import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarMarcaComponent } from './cadastrar-marca/cadastrar-marca.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { EditarMarcaComponent } from './editar-marca/editar-marca.component';


const routes: Routes = [

  { path: 'marcas/cadastro/', component: CadastrarMarcaComponent },
  { path: 'produtos/cadastro', component: CadastroProdutoComponent },
  { path: 'marcas/:id/editar', component: EditarMarcaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
