import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { EditarMarcaComponent } from './editar-marca/editar-marca.component';
import { CadastrarMarcaComponent } from './cadastrar-marca/cadastrar-marca.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select'; 


@NgModule({
  declarations: [
    AppComponent,
    EditarMarcaComponent,
    CadastrarMarcaComponent,
    CadastroProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
