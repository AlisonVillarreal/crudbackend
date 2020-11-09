import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDenominacionesComponent } from './components/denominaciones/add-denominaciones/add-denominaciones.component';
import { ListarDenominacionesComponent } from './components/denominaciones/listar-denominaciones/listar-denominaciones.component';
import { UpdateDenominacionesComponent } from './components/denominaciones/update-denominaciones/update-denominaciones.component';

const ROUTES: Routes = [
  { path: 'listar', component: ListarDenominacionesComponent},
  { path: "denominacion/add", component: AddDenominacionesComponent },
  { path: "editar/:id", component: UpdateDenominacionesComponent }
  /*
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }*/
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }