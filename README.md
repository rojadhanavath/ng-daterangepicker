# ng-daterangepicker ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

![GitHub package version](https://img.shields.io/badge/GitHub%20package%20version-0.0.2-blue.svg?style=popout)


This is advanced angular library built in angular 5 with range selection and time selection.

## Installation

### Requirements
* momentjs
* angular v5

`$ npm i date-range-pickr`

## Usage

```angular
<rj-date-range-pickr dateformat="DD-MMM-YYYY" (dateEmit)="onOpen($event)" credit=0></rj-date-range-pickr>


```
### Usage in detail:
> you can use 'dateformat' to format date and display - follows momentjs date dateformat
> you can use 'dateEmit' to retrieve the date and format it for your purpose or communicating to parent components
>optional credit attribute to give me some credits :)



## module file settings
```
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
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
