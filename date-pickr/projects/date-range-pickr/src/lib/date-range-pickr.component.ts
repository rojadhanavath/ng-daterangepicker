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

  @Input() credit: number;

  resultDate: any;
  currentDate: any;
  title: any;
  dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  weeks = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
  data: any;
  characters: any[];
  columns: any[];
  isRangeVisible: boolean;
  id: any;
  constructor() {

  }

  ngOnInit() {
    this.isRangeVisible = false;
    this.currentDate = moment();
    this.title = this.currentDate.format('MMMM YYYY');
    this.initCalendar();
    this.backFill(this.currentDate);
    console.log(this.credit);
    if (this.credit == 1) {
      console.log('%c Made with ❤ ! Hire me!!', 'background: #eedfdf; color: #da6955');
    }
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
      // console.log(this.week_of_month(z) + '_' + z.day() + '_' + z.format('DD'));
      this.data[this.week_of_month(z)][z.day()] = z.format('DD');
      z = clonef.subtract(1, 'days');
    }
  }

  onOpen(e, id: any) {
    e.stopPropagation();
    this.id = id;
    this.resultDate = "marked";
    let elementId: string = (e.target as Element).id;
    console.log(elementId);
  }

  week_of_month(m) {
    let val = m.week() - moment(m).startOf('month').week();
    return (val >= 0) ? val : (((moment(m).day()) > 0) ? this.week_of_month(moment(m).subtract(1, 'days')) : this.week_of_month(moment(m).subtract(1, 'days')) + 1);
  }

}

export interface CalendarDate {
  mDate: any;
  selected?: boolean;
  today?: boolean;
}
