import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { MuestrasComponent } from './muestras/muestras.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'muestras',
        component: MuestrasComponent
      },
      {
        path: 'detalles',
        component: DetallesComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
