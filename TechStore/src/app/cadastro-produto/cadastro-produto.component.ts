import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MarcasService } from '../services/marcas.service';
import { Marca } from '../models/marca.model';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {

  marcas: Observable<Marca[]>;
 
  formulario = this.formBuilder.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    idMarca: ['', Validators.required],
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private formBuilder: FormBuilder, private produtosService: ProdutosService, private marcasService: MarcasService) { }

  ngOnInit(): void {
    this.marcas = this.marcasService.getObservable();
  }

  async submit(){

    if(!this.formulario.valid){
      return;
    }
    this.formulario.disable();

    const produto = this.formulario.value as Produto;

    const produtoRetorno = await this.produtosService.add(produto);

    this.formulario.enable();
    this.formGroupDirective.resetForm();
  }
}
