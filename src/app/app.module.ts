
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, AlertController, Events } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IndaApp } from './app.component';
import { Login } from '../pages/login/login';
import { Recuperar } from '../pages/recuperar/recuperar';
import { Produto } from '../pages/produto/produto';
import { Pesquisa } from '../pages/pesquisa/pesquisa';
import { Grafico } from '../pages/grafico/grafico';
import { AuthService } from '../services/auth.service';
import { Modalidade } from '../pages/modalidade/modalidade';
import { Visitante } from '../pages/visitante/visitante';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCygXVCiZfMGBjVX2crK0HLsaNpBLQvOfo",
  authDomain: "inda-mobile.firebaseapp.com",
  databaseURL: "https://inda-mobile.firebaseio.com",
  projectId: "inda-mobile",
  storageBucket: "inda-mobile.appspot.com",
  messagingSenderId: "395394641844"
};

@NgModule({
  declarations: [
    IndaApp,
    Modalidade,
    Login,
    Produto,
    Pesquisa,
    Grafico,
    Recuperar,
    Visitante,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(IndaApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    IndaApp,
    Modalidade,
    Login,
    Produto,
    Pesquisa,
    Grafico,
    Recuperar,
    Visitante,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})

export class AppModule {

  constructor(
    public alertCtrl: AlertController,
    public events: Events) {

    let alertFalhou = this.alertCtrl.create({
      title: 'Informe seus Dados',
      subTitle: 'Seu E-Mail e Senha devem ser informados corretamente!',
      buttons: ['OK']
    });

       this.events.subscribe('login:falhou', (error) => {
          alertFalhou.present();
       })
  }

}
