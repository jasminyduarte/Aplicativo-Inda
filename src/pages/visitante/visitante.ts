import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the VisitantePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-visitante',
  templateUrl: 'visitante.html',
})
export class Visitante {

  nome: string = "";
  telefone: string = "";
  email: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
  }

  doEnviarContato() {
    let loader = this.loadingCtrl.create({
          content: 'Enviando Solicitação',
    });

    loader.present();

    setTimeout(() => {
        loader.dismiss();
        this.navCtrl.popToRoot();
    }, 3000);
  }

}
