import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { interfaceCourse } from '../model/course';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentCourses: any = [...COURSES];

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
  onClickParent(childEventData:interfaceCourse) {
    console.log("Click From Parent Component", childEventData);
  }

}
