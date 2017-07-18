import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';

import { Pesquisa } from '../pesquisa/pesquisa';
import { ProdutoService } from '../../services/produto.service';
import { AuthService } from '../../services/auth.service';


@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class Produto {

   public lista_produto : Object[];
   public selecionados:number[] = [];
   public dao:any;
   public contProdutos:number = 0;
   private modalidadeSelecao:string = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public events: Events,
    public AuthService: AuthService) {
      this.dao = new ProdutoService;
      this.modalidadeSelecao = navParams.get('modalidade');

      // FIXME: Isso nao ta legal #1
      if(this.modalidadeSelecao == 'importacoes') {
       this.lista_produto = this.dao.getProdutoType(this.modalidadeSelecao);
      } else
      {
        this.lista_produto = this.dao.getProdutoType("normal");
      }
  }

  itemClicked(id, checked) {

    if(checked == true) {
      ++this.contProdutos;
      this.selecionados.push(id);
    } else {
      let posicao = this.selecionados.indexOf(id);

      delete this.selecionados[posicao];

      --this.contProdutos;
    }

  }

  doPesquisa (){

    if(this.contProdutos == 0) {
      let alert = this.alertCtrl.create({
         title: 'Erro',
         subTitle: 'Escolha ao menos um Produto!',
         buttons: ['OK']
       });
       alert.present();

       return;
    }

    this.navCtrl.push(Pesquisa, {selecionados: this.selecionados, modalidade: this.modalidadeSelecao});
  }

  sair() {
      this.AuthService.efetuarLogoff();
  }


}
