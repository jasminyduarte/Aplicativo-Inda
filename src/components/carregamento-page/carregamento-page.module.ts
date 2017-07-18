import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CarregamentoPage } from './carregamento-page';

@NgModule({
  declarations: [
    CarregamentoPage,
  ],
  imports: [
    IonicModule.forRoot(CarregamentoPage),
  ],
  exports: [
    CarregamentoPage
  ]
})
export class CarregamentoPageModule {}
