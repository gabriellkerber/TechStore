import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
    const documento = this.firestore.collection('testes').doc('k3i7qlV5aajppN3BetG9').get().toPromise();
    console.log(documento);
  }
}
