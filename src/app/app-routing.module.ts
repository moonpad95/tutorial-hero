import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './view/heroe/table/table.component';
import { FormComponent } from './view/heroe/form/form.component';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './view/heroe/home-component/home-component.component';

const routes: Routes = [
  {path:"", redirectTo:"dashboard", pathMatch:"full"},
  {path:"table" ,component:TableComponent},
  {path:"dashboard", component: HomeComponentComponent},
  {path:"form" ,component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
