import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  interpolationMessage: string = "Interpolation Message!!!";
  propertyTitle: string = "Property Binding";
  eventClickMessage: string = "";
  twoWayBindTitle: string = "TwoWay Data Binding";

  onClick() {
    this.eventClickMessage = "Event Binding"
  }

}
