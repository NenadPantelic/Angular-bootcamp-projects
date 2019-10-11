import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-directives-p3';
  visible = false;
  clicksLog = [];
  counter = 0;


  onToggle(){
    this.visible = !this.visible;
    let clickTimestamp = new Date().valueOf();
    this.counter++;
    this.clicksLog.push({'time':clickTimestamp, 'counter':this.counter});
  }


}
