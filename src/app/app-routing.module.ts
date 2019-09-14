import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {InvdetialComponent} from './invdetial/invdetial.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'index', component: IndexComponent },
  {path: 'invdetial', component: InvdetialComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
