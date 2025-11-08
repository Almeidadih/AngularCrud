import { Component } from '@angular/core';
import { Pessoa } from '../../services/types/types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-form',
  imports: [],
  templateUrl: './pessoa-form.html',
  styleUrl: './pessoa-form.css',
})
export class PessoaForm {

  titulo: string = 'Cadastro de Pessoa';

  pessoa: Pessoa = {} as Pessoa;  


  constructor(private service: PessoaService,
              private router: Router,
              private route: ActivatedRoute
  ) { } 

}
