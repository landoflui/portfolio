import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilingComponent } from './filing/filing.component';  // <-- Import here

const routes: Routes = [
  { path: 'filing', component: FilingComponent },  // <-- Add this line
  // other routes can go here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
