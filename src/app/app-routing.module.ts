import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimezoneComponent } from './timezone/timezone.component';


const routes: Routes = [
  { path:'', component: TimezoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
