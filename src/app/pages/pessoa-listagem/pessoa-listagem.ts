import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PessoaService, Pessoa } from '../../services/pessoaservice';

@Component({
  selector: 'app-pessoa-listagem',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pessoa-listagem.html',
  styleUrls: ['./pessoa-listagem.css'],
})
export class PessoaListagem implements OnInit {

  listaPessoas: Pessoa[] = [];

  constructor(private service: PessoaService,
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
