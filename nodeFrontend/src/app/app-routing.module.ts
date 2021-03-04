import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrabadoListarComponent } from 'src/app/modules/grabado/pages/grabado-listar/grabado-listar.component'
import { GrabadoActualizarComponent } from 'src/app/modules/grabado/pages/grabado-actualizar/grabado-actualizar.component'
import { GrabadoAgregarComponent } from 'src/app/modules/grabado/pages/grabado-agregar/grabado-agregar.component'

const routes: Routes = [
  //{path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'grabado/listar', component:GrabadoListarComponent},
  {path: 'grabado/agregar', component:GrabadoAgregarComponent},
  {path: 'grabado/actualizar', component:GrabadoActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingGrabadoComponents = [
  GrabadoListarComponent,
  GrabadoActualizarComponent,
  GrabadoAgregarComponent
]
