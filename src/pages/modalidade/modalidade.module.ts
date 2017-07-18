import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Modalidade } from './modalidade';

@NgModule({
  declarations: [
    Modalidade,
  ],
  imports: [
    IonicModule.forRoot(Modalidade)
    // IonicPageModule.forChild(ModalidadePage),
  ],
  exports: [
    Modalidade
  ]
})
export class ModalidadeModule {}
