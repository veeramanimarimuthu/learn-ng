import { Component, EventEmitter, Input, Output } from '@angular/core';
import { interfaceCourse } from '../model/course';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input() childCourse!: interfaceCourse;

    @Output() customEvent = new EventEmitter<interfaceCourse>();

    onClickChild() {
      console.log("click from ChildComponent");
      this.customEvent.emit(this.childCourse);
    }
}
