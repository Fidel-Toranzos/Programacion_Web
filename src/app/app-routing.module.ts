import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycomponentoneComponent } from './mycomponentone/mycomponentone.component';

const routes: Routes = [
  {
    path: "mycomponente",
    component: MycomponentoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
