import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeCompArr } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { ContentComponent } from './content/content.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
// import { HomeComponent } from './home/home.component';
// import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    routeCompArr,
    ContentComponent
    // HomeComponent,
    // TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatTreeModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
