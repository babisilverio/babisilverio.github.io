import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumoComponent } from './components/resumo/resumo.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumoComponent,
    ExperienciaComponent,
    EducacaoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
