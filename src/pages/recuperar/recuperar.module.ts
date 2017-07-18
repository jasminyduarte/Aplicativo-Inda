import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Recuperar } from './recuperar';

@NgModule({
  declarations: [
    Recuperar,
  ],
  imports: [
    IonicModule.forRoot(Recuperar),
  ],
  exports: [
    Recuperar
  ]
})
export class RecuperarModule {}
