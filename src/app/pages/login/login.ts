import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  login:string = '';
  senha:string = '';

  onBotaoClicado():void {
      alert(`Login: ${this.login} | Senha: ${this.senha}`);
  }

}
