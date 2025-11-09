import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { PessoaListagem } from './pages/pessoa-listagem/pessoa-listagem';
import { PessoaForm } from './pages/pessoa-form/pessoa-form';

export const routes: Routes = [

    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {

        path:'pessoas/login',
        component:Login,
        title:'Login'
    },
    {
        path:'pessoas',
        component:PessoaListagem,
        title:'Listagem de Pessoas cadastradas'
    },
    {
        path:'pessoas/incluir',
        component: PessoaForm,
        title: 'Pessoas - Incluir'
    }   

];
