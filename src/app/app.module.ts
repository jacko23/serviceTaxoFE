import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ListaContattiComponent } from './lista-contatti/lista-contatti.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaContattiComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [ListaContattiComponent]
})
export class AppModule { }
