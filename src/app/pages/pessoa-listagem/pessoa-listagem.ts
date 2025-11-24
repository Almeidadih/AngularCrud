import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { PessoaService } from '../../services/pessoaservice';
import { Pessoa } from '../../services/types/types';

@Component({
  selector: 'app-pessoa-listagem',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
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
    if(id){
      this.service.excluir(id).subscribe(() => {
        window.location.reload()
      })
    }
  }

}
