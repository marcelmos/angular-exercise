import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask = '';
  taskList = new Array<Task>();
  setNewTask = false;

  createNewTask(event){
    this.newTask = event.target.value;
  }

  addToTaskList() {
    this.setNewTask = true;
  }

  // deleteThis() {
  // }

  // completeThis() {
  // }

  constructor(){
    if (this.newTask.length > 0 && this.setNewTask){
      this.taskList.push(new Task(this.newTask, false));
      this.setNewTask = false;
    }
  }
}

class Task{
  constructor(public taskName: string, public status: boolean){
  }
}
