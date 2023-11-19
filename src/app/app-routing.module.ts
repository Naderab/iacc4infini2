import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';

const routes: Routes = [
  { path: 'residences', component: ResidencesComponent },
  { path: '', redirectTo: 'residences',pathMatch:'full' },
  { path: 'users', component: UsersComponent },
  { path: 'residence/:id/:name', component: DetailsResidenceComponent },
  { path: '**', component: NotFoundComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
