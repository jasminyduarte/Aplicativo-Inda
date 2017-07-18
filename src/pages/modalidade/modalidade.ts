import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../produto/produto';

@IonicPage()
@Component({
  selector: 'page-modalidade',
  templateUrl: 'modalidade.html',
})

export class Modalidade {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selecionarProdutos(selecao:String) {
    this.navCtrl.push(Produto, {modalidade: selecao});
  }

}
