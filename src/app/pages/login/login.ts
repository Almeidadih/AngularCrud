import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  login: string = '';
  senha: string = '';

  constructor(private router: Router) {}

    onBotaoClicado(): void {

       if (this.login.trim() !== '' && this.senha.trim() !== '') {

      if (this.login.trim() === 'admin' && this.senha.trim() === '123') {
              this.router.navigate(['/pessoas']);

      }else{
        alert('Dados inválidos!');
      }

    }else{
      alert('Por favor, preencha todos os campos!');
    }
  }

}