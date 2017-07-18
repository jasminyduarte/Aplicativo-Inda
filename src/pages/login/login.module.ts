import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Login } from './login';


@NgModule({
  declarations: [
    Login,
  ],
  imports: [
     IonicModule.forRoot(Login),

     //deu problema com o forChild

  ],
  exports: [
    Login
  ]
})
export class LoginModule {
  id:number;
  email:string;
  senha:string;
}
