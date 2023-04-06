import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {DataComponent} from "../data/data.component";



const route: Routes = [
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
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingModule { }
