import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Pessoa {

  private readonly API  = 'http://localhost:3000/pessoas'
id: any;
nome: any;
sobrenome: any;
dtNascimento: any;

  constructor(private http: HttpClient) { }

  listar(): Observable<Pessoa[]> {

    return this.http.get<Pessoa[]>(this.API);
  }

  incluir(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API, pessoa);
  }


}
