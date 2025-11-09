import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pessoa, PessoaService } from '../../services/pessoaservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  imports: [FormsModule],
  templateUrl: './pessoa-form.html',
  styleUrl: './pessoa-form.css',
})
export class PessoaForm {

  titulo: string = 'Cadastro de Pessoas';

  pessoa: Pessoa = {} as Pessoa;  


  constructor(private service: PessoaService,
              private router: Router,
              private route: ActivatedRoute
  ) { } 


  submeter(){
    this.service.incluir(this.pessoa).subscribe(() => {
      this.router.navigate(['/pessoas']);
    })
  }
}
