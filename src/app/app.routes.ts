import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { PessoaListagem } from './pages/pessoa-listagem/pessoa-listagem';

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
    }

];
