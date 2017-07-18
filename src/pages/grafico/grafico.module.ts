import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Grafico } from './grafico';

@NgModule({
  declarations: [
    Grafico,
  ],
  imports: [
    IonicModule.forRoot(Grafico),
  ],
  exports: [
    Grafico
  ]
})
export class GraficoModule {}
