import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DelkravComponent } from './delkrav/delkrav.component';
import { Delkrav2Component } from './delkrav2/delkrav2.component';

@NgModule({
  declarations: [
    AppComponent,
    DelkravComponent,
    Delkrav2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
