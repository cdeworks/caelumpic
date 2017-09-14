import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const appRoutes: Routes = [
    {path: '', component: ListagemComponent },
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes, {enableTracing: true})