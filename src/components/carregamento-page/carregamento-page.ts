import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the CarregamentoPage component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'carregamento-page',
  templateUrl: 'pesquisa.html'
})
export class CarregamentoPage {
  constructor( public loadingCtrl: LoadingController) {

  }
  presentLoading() {
  let loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 3000
  });
  loader.present();
}
}
