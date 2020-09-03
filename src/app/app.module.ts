import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentoneComponent } from './mycomponentone/mycomponentone.component';
import { MycomponenttwoComponent } from './mycomponenttwo/mycomponenttwo.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentoneComponent,
    MycomponenttwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
