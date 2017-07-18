import { Component, ViewChild } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-grafico',
  templateUrl: 'grafico.html',
})
@Injectable()

export class Grafico {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  public selecionados: Object[];
  public produtos: Object[] = [];
  public modalidadeSelecao:string = null;

  private inicio: number;
  private fim: number;
  private ano: number;
  private anoFinal: number;
  private grafLinha: boolean;
  private grafColuna: boolean;
  private mesMes: boolean;

  private filtroAno: number[] = [];
  private filtroMeses: number[][] = [];

  public ps:any;

  constructor(public navCtrl: NavController,
                public params: NavParams,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController)
  {
    this.ps = new ProdutoService;
    this.selecionados = params.get('selecionados');
    this.ano = params.get('ano');
    this.anoFinal = params.get('anoFinal');
    this.fim = params.get('fim');
    this.inicio = params.get('inicio');
    this.grafLinha = params.get('grafLinha');
    this.grafColuna = params.get('grafColuna');
    this.modalidadeSelecao = params.get('modalidade');
    this.mesMes = params.get('mesMes');

    // MEGA HACK FIXME
    if(this.ano != this.anoFinal) {

      while(this.ano <= this.anoFinal) {
        this.filtroAno.push(this.ano);
        this.filtroMeses[this.ano] = [];

        if(this.ano != this.anoFinal) {

          for(let i = this.inicio; i <= 11; i++) {
            if(this.mesMes == false && i == this.inicio)
            {
              this.filtroMeses[this.ano].push(+i);
            } else if (this.mesMes == true) {
              this.filtroMeses[this.ano].push(+i);
            }
          }

        } else {

          for(let x = 0; x <= this.fim; x++) {
            if(this.mesMes == false && x == this.inicio)
            {
              this.filtroMeses[this.anoFinal].push(+x)
            } else if (this.mesMes == true) {
              this.filtroMeses[this.anoFinal].push(+x)
            }
          }

        }

        this.ano++;
      }

    } else {
      this.filtroAno.push(this.ano);

      this.filtroMeses[this.ano] = [];

      for(let j = this.inicio; j <= this.fim; j++) {
        if(this.mesMes == false && j == this.fim)
        {
          this.filtroMeses[this.ano].push(+j);
        } else if (this.mesMes == true) {
          this.filtroMeses[this.ano].push(+j);
        }
      }
    }
  }

  doSalvarPdf() {
    let loader = this.loadingCtrl.create({
          content: 'Enviando',
    });

    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Verifique seu E-mail!',
      buttons: ['OK']
    });

    loader.present();

    setTimeout(() => {
        loader.dismiss();
        alert.present();
    }, 3000);
  }

  ionViewDidLoad() {

    let dataset:Object[] = [];
    let labels:string[] = [];

    // Lógica da Barra e das Linhas
    this.selecionados.forEach(id => {
      let produto = this.ps.getProdutoById(id);

      let valores:number[] = [];

      let index:number = 0; // Hack do mal..

      for(let anoSeleciono of this.filtroAno) {

        for (let propValor in produto.dados[this.modalidadeSelecao][anoSeleciono]) {

          if(this.filtroMeses[anoSeleciono].indexOf(index) > -1) {
            valores.push(produto.dados[this.modalidadeSelecao][anoSeleciono][propValor]);
          }

          index++;
        }

        index = 0;
      }

      dataset.push({
        backgroundColor: produto.cor,
        data: valores,
        label: produto.produto
      });

    }); // End forEach

    for (let anoSelecionado of this.filtroAno) {

      let tamanho = this.filtroMeses[anoSelecionado].length;
      let valorInicial = this.filtroMeses[anoSelecionado][0];
      let valorFinal = this.filtroMeses[anoSelecionado][tamanho-1];

      for(let x = valorInicial; x <= valorFinal; x++) {
          if(x == 0) {
            labels.push('Jan/' + +anoSelecionado);
          } else if (x == 1) {
            labels.push('Fev/' + +anoSelecionado);
          } else if (x == 2) {
            labels.push('Mar/' + +anoSelecionado);
          } else if (x == 3) {
            labels.push('Abr/' + +anoSelecionado);
          } else if (x == 4) {
            labels.push('Mai/' + +anoSelecionado);
          } else if (x == 5) {
            labels.push('Jun/' + +anoSelecionado);
          } else if (x == 6) {
            labels.push('Jul/' + +anoSelecionado);
          } else if (x == 7) {
            labels.push('Ago/' + +anoSelecionado);
          } else if (x == 8) {
            labels.push('Set/' + +anoSelecionado);
          } else if (x == 9) {
            labels.push('Out/' + +anoSelecionado);
          } else if (x == 10) {
            labels.push('Nov/' + +anoSelecionado);
          } else if (x == 11) {
            labels.push('Dez/' + +anoSelecionado);
          }
      }

    }

      if(this.grafColuna) {

        this.barChart = new Chart(this.barCanvas.nativeElement, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: dataset
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }
        });

      }

      if(this.grafLinha) {

        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
          type: 'line',
          data: {
            labels: labels,
            datasets: dataset
          }
        });

      }

  }

}
