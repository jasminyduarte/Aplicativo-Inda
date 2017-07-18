import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Pesquisa } from './pesquisa';

@NgModule({
  declarations: [
    Pesquisa,
  ],
  imports: [
    IonicModule.forRoot(Pesquisa),
  ],
  exports: [
    Pesquisa
  ]
})
export class PesquisaModule {}
