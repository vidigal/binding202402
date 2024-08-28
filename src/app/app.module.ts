import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { BuscaComponent } from './busca/busca.component';
import { PropertybComponent } from './propertyb/propertyb.component';
import { EventbComponent } from './eventb/eventb.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacaoComponent,
    HeadComponent,
    FooterComponent,
    BuscaComponent,
    PropertybComponent,
    EventbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
