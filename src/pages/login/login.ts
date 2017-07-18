import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events, LoadingController } from 'ionic-angular';

import { Visitante } from '../visitante/visitante';
import { Modalidade } from '../modalidade/modalidade';
import { Recuperar } from '../recuperar/recuperar';
import { Usuario } from '../../model/usuarioModel';
import { AuthService }  from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Injectable()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  private usuario:Usuario = new Usuario();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AuthService:AuthService,
    public alertCtrl: AlertController,
    public events: Events,
    public loadCtrl: LoadingController,
    public af: AngularFireAuth) {

      af.authState.subscribe(auth => {
        if(auth) {
          this.navCtrl.setRoot(Modalidade);
        }
      })

  }

  LoginComCredencial() {
    let loading = this.loadCtrl.create({
      content: "Verificando"
    });

    loading.present();

    this.AuthService.LoginComCredencial(this.usuario, loading);
  }

  doEsqueci(){
    this.navCtrl.push(Recuperar);
  }

  doVisitante()
  {
    this.navCtrl.push(Visitante);
  }

}
