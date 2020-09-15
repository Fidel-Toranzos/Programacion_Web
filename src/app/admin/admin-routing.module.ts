import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { Component1Component } from './component1/component1.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'component1',
    component: Component1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

//http:// ....com/..../componente2