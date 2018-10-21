import { Component } from '@angular/core';

@Component({
  selector: 'picr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date-pickr';


  onOpen(e) {
    console.log(e)
  }
}
