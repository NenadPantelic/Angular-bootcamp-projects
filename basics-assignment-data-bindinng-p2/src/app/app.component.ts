import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-data-bindinng-p2';

  username='';

  isUsernameEmpty(){
    return this.username === '';
  }

  resetUsername(){
    this.username = '';
  }
}
