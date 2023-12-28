import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FoodpageComponent} from "./foodpage/foodpage.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'admin',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
