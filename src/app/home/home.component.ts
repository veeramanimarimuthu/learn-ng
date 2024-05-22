import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "Hello";
  message = "I'm leaning Ng";
  display = true;

  inputValue: string = '';

  onclick(){
    this.display = false;
  }
}
