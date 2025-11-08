import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../services/pessoaservice';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pessoa-listagem',
  imports: [RouterLink],
  templateUrl: './pessoa-listagem.html',
  styleUrl: './pessoa-listagem.css',
})
export class PessoaListagem implements OnInit {

  listaPessoas: Pessoa[] = [];

  constructor(private service: Pessoa, 
              private router: Router
  ) {}

  ngOnInit(): void {
      this.service.listar().subscribe((pessoas) => {
          this.listaPessoas = pessoas;
      })
  }

  excluir(id:number){
    
  }

}
