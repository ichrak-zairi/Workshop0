import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { ResidenceFormComponent } from './residence-form/residence-form.component';


const routes: Routes = [
  {path:"", redirectTo:'home' , pathMatch:"full"},
  {path:"residences", component:ResidencesComponent},
  {path:"home", component:HomeComponent},
  { path:'details/:id', component: ResidenceDetailsComponent},
  { path:'add', component: ResidenceFormComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
