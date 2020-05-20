import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MarcasService } from '../services/marcas.service';
import { Marca } from '../models/marca.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.component.html',
  styleUrls: ['./editar-marca.component.scss']
})
export class EditarMarcaComponent implements OnInit {

  marca: Marca;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private marcasService: MarcasService,
    private activedRoute: ActivatedRoute) { }

  async ngOnInit(){
    const id = this.activedRoute.snapshot.paramMap.get('id');

    this.marca = await this.marcasService.get(id);

    this.formulario.patchValue(this.marca);
  }

  async submit(){

    if(!this.formulario.valid){
      return;
    }
    this.formulario.disable();

    // const marca = this.formulario.value as Marca;

    // const marcaRetorno = await this.marcasService.add(marca);

    this.formulario.enable();
    this.formGroupDirective.resetForm();
  }

}
