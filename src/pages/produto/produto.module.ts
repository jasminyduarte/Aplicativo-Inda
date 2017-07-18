import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Produto } from 'produto';
import { ProdutoService } from 'produto.service';


@NgModule({
  declarations: [
    Produto,
  ],
  imports: [
    IonicModule.forRoot(Produto),
  ],
  exports: [
    Produto
  ],
  providers: [
    ProdutoService,
  ]
})
export class ProdutoModule {}
