import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Produto } from './models/produto.model';
import { Modelo } from './models/modelo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TechStore';

  constructor(private firestore: AngularFirestore){

  }

  async ngOnInit() {
    const documentoProduto = this.firestore.collection('testes').doc('ms58CHmK5wO9iBoxsYKw').get()
    .toPromise();

    const produto = {
      id: (await documentoProduto).id,
      ...(await documentoProduto).data()
    } as Produto;

    const documentoModelo = this.firestore.collection('modelo').doc(produto.idModelo).get()
    .toPromise();

    const modelo = {
      id: (await documentoModelo).id,
      ...(await documentoModelo).data()
    } as Modelo;

    console.log('Nome Produto: '+ produto.nome);
    console.log('Memoria do Produto: '+modelo.memoria);
  }
}
