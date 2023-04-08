import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {DataComponent} from "../data/data.component";



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'data',
    component: DataComponent
  },
  {
    path:'data/:symbol',
    component: DataComponent
  }
]
@NgModule({
  // declarations: [],
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RoutingModule { }
