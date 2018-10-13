import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DateRangePickrModule} from 'date-range-pickr';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,DateRangePickrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
