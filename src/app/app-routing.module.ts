import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackComponent } from './back/back.component';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'next', component: NextComponent},
  {path: 'back', component: BackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
