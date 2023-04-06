import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory/directory.component';
import { RouterComponent } from './router/router.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    RouterComponent,
    HomeComponent,
    DataComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
