import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { FoglalasListaComponent } from './foglalas-lista/foglalas-lista.component';
import { UjfoglalasComponent } from './ujfoglalas/ujfoglalas.component';

const routes: Routes = [
  { path: '', component: FooldalComponent },
  { path: 'foglalasok', component: FoglalasListaComponent },
  { path: 'ujfoglalas', component: UjfoglalasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
