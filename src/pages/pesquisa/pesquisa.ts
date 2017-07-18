import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Grafico } from '../grafico/grafico';

@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})

export class Pesquisa {

  private inicio: number = 0;
  private fim: number = 11;
  private ano: number = 2007;
  private anoFinal: number = 2017;
  private graficoLinha: boolean = false;
  private graficoColuna: boolean = false;
  private selecionados: Object[];
  private modalidadeSelecao:string = null;
  private mesMes: boolean = true;
  private mesInicialString: String = "Mês Inicial";

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public params: NavParams, public alertCtrl: AlertController) {
      this.selecionados = params.get('selecionados');
      this.modalidadeSelecao = params.get('modalidade');
    }

  mesSwift() {
    this.mesMes = !this.mesMes;

    if(this.mesMes) {
      this.mesInicialString = "Mês Inicial"
    } else {
      this.mesInicialString = "Relatório do Mês"
    }
  }

  doGrafico() {

    if(this.ano != this.anoFinal) {
      if(this.ano > this.anoFinal) {
        let alert = this.alertCtrl.create({
         title: 'Erro',
         subTitle: 'Ano Inicial não pode ser superior ao Ano Final.',
         buttons: ['OK']
       });
       alert.present();

       return;
      }

      if(this.inicio > this.fim) {
        let alert = this.alertCtrl.create({
         title: 'Erro',
         subTitle: 'Mês Inicial não pode ser superior ao Mês Final.',
         buttons: ['OK']
       });
       alert.present();

       return;
      }
    }

    let loader = this.loadingCtrl.create({
          content: 'Carregando Dados',
    });

    loader.present();

    setTimeout(() => {
        loader.dismiss();
        this.navCtrl.push(Grafico, { selecionados: this.selecionados, ano: this.ano, anoFinal: this.anoFinal, inicio: this.inicio, fim: this.fim, grafLinha: this.graficoLinha, grafColuna: this.graficoColuna, modalidade: this.modalidadeSelecao, mesMes: this.mesMes } );
    }, 3000);

  }

}
