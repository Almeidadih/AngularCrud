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

  pessoaId?: number;

  pessoa: Pessoa = {} as Pessoa;  


  constructor(private service: PessoaService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.pessoaId = this.route.snapshot.params['id'];
     
    if(this.pessoaId){
      service.buscarPorId(this.pessoaId).subscribe(pessoa => {

        if(pessoa){
          this.pessoa.id = pessoa.id;
          this.pessoa.nome = pessoa.nome;
          this.pessoa.sobrenome = pessoa.sobrenome;
          this.pessoa.dtNascimento = pessoa.dtNascimento;

        }
    })
    
   } 
  } 

   submeter(){

    if(this.pessoaId){
      this.service.editar(this.pessoa).subscribe(() => {
        this.router.navigate(['/pessoas']);
      })
    }else{
       this.service.incluir(this.pessoa).subscribe(() => {
      this.router.navigate(['/pessoas']);
       })
    }
  }


}

