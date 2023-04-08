import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { SearchComponent } from './search/search.component';
import {RoutingModule} from "./routing/routing.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";

import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
