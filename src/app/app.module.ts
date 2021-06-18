import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './shared/list/list.component';
import { ResultsComponent } from './pages/results/results.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PlayComponent } from './pages/play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ResultsComponent,
    NavbarComponent,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    DragDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
