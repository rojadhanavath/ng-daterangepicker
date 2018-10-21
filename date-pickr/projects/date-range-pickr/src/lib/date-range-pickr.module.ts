import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { DateRangePickrComponent } from './date-range-pickr.component';

@NgModule({
  imports: [CommonModule 
  ],
  declarations: [DateRangePickrComponent],
  exports: [DateRangePickrComponent]
})
export class DateRangePickrModule { }
