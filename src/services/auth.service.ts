 import { NgZone, Injectable } from '@angular/core';
 import { Events, AlertController } from 'ionic-angular';
 import { Usuario } from '../model/usuarioModel';
 import { AngularFireAuth } from 'angularfire2/auth';

 @Injectable()

 export class AuthService {

   constructor( public NgZone:NgZone,
     public alertCtrl: AlertController,
     public events: Events,
     public af: AngularFireAuth) {}

   LoginComCredencial(usuario:Usuario, loading) {

     if(usuario.email == null || usuario.senha == null) {
       let alert = this.alertCtrl.create({
          title: 'Informe seus Dados',
          subTitle: 'Seu E-Mail e Senha devem ser informados corretamente!',
          buttons: ['OK']
        });
        loading.dismiss();
        alert.present();
        return;
     }

     this.af.auth.signInWithEmailAndPassword(usuario.email,usuario.senha)
      .then( resultado => {
        loading.dismiss();
      }).catch( error => {
        this.events.publish('login:falhou', error);
        loading.dismiss();
      });

   }

   efetuarLogoff() {
    this.af.auth.signOut().then( ()  =>
    {
      this.events.publish('login:sair')
    });
   }

 }
