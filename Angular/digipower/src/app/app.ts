import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

class Student {
  constructor(
    public name :string,
    public age :number,
    public city :string = '') {
  }
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  author = "Lars";
  age = 32;
  city = 'Breda';
  mainStudent = new Student(this.author, this.age, this.city);

  students = [
    new Student('Erwin', 12) as Student,
    new Student('Hans', 18) as Student,
    new Student('Mike', 24) as Student,
    ];

  newName = '';
  newAge = 0;

  birthday() {
    this.age++;
  }

  addStudent()
  {
    if (this.newName === '' || this.newAge === 0) {
      return;
    }

    this.students.push(
      new Student(this.newName, this.newAge)
    );

    this.newName = '';
    this.newAge = 0;
  }

  clearStudents() {
    this.students = [];
  }
}
