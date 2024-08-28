import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventbComponent } from './eventb/eventb.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { PropertybComponent } from './propertyb/propertyb.component';

const routes: Routes = [
  {path: 'interpolacao', component: InterpolacaoComponent},
  {path: 'eventb', component: EventbComponent},
  {path: 'pb', component: PropertybComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
