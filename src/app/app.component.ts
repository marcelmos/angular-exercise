import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask = '';
  taskList = [];
  completedTaskList = [];
  setNewTask = false;

  createNewTask(event){
    this.newTask = event.target.value;
  }

  addToTaskList() {
    if (this.newTask.length > 0) this.taskList.push(this.newTask);
  }

  deleteThis(event) {
    this.taskList.splice(event.target.value, 1);
  }

  completeThis(event) {
    this.completedTaskList.push(this.taskList[event.target.value]);
    this.taskList.splice(event.target.value, 1);
  }
}
