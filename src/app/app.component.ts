import { Component } from '@angular/core';
import studentsData from './students.json'

import { Student } from "./student/student"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json2angular';
  students: Student[] = studentsData;

  onRowClick(id: Number) {
    console.log("ID of the record selected is :", id);
    for (let studentInfo of this.students) {
      if (id == studentInfo.id) {
        studentInfo.selected = true
      }
      else {
        studentInfo.selected = false
      }
    }
  }
}
