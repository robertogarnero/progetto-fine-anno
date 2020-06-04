import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrasiComponent } from './components/frasi/frasi.component';
import { NorrisComponent } from './components/norris/norris.component';


const routes: Routes = [
  { path: '', component: FrasiComponent },
  { path: 'chuck/:frasiValue', component: NorrisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
