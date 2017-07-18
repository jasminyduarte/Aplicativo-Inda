import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Visitante } from './visitante';

@NgModule({
  declarations: [
    Visitante,
  ],
  imports: [
    IonicPageModule.forChild(Visitante),
  ],
  exports: [
    Visitante
  ]
})
export class VisitantePageModule {}
