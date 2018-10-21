import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


import * as _ from 'lodash';
import * as _moment from 'moment';

const moment = _rollupMoment || _moment;
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
@Component({
  selector: 'rj-date-range-pickr',
  templateUrl: './date-range-pickr.html',
  styleUrls: ['./date-range-pickr.component.css']


})

export class DateRangePickrComponent implements OnInit {

  currentDate: any;
  title: any;
  dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  weeks = ['first', 'second', 'third', 'fourth', 'fifth'];
  data: any;
  characters: any[];
  columns: any[];
  isRangeVisible: boolean;
  id: any;
  constructor() { }

  ngOnInit() {
    this.isRangeVisible = false;
    this.currentDate = moment();
    this.title = this.currentDate.format('MMMM YYYY');

    this.initCalendar();
    this.backFill(this.currentDate);


  }

  initCalendar() {
    this.data = [];
    for (let i = 0; i <= this.weeks.length; i++) {
      let temp = [0, 1, 2, 3, 4, 5, 6];
      temp.fill(0);
      this.data.push(temp);
    }
  }


  calendarClicked() {

    this.isRangeVisible = (this.isRangeVisible === true) ? false : true;
  }

  prevMonth(e) {
    e.stopPropagation();
    let prevMon = moment((this.currentDate).subtract(1, 'month'));
    this.title = prevMon.format('MMMM YYYY');
    this.initCalendar();
    this.backFill(prevMon);

  }
  nextMonth(e) {
    e.stopPropagation();
    let nextMon = moment((this.currentDate).add(1, 'month'));
    this.title = nextMon.format('MMMM YYYY');
    this.initCalendar();
    this.backFill(nextMon);

  }

  backFill(cDate) {
    let clonef = moment(cDate);
    let endOfMonth = parseInt(clonef.endOf('month').format('DD'));
    let current = parseInt(clonef.format('DD'));
    let endDate = clonef.endOf('month');

    for (var i = endOfMonth; i > 0; i--) {
      let z = endDate;


      this.data[this.week_of_month(z)][z.day()] = z.format('DD');
      z = clonef.subtract('days', 1);
    }
  }

  onOpen(e, id: any) {
    e.stopPropagation();
    this.id = id;
    console.log(id);
    let elementId: string = (e.target as Element).id;
  }

  week_of_month(date) {

    let prefixes = [0, 1, 2, 3, 4, 5];

    return prefixes[0 | moment(date).date() / 7]

  }

}

export interface CalendarDate {
  mDate: any;
  selected?: boolean;
  today?: boolean;
}
