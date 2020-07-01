import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TasksService } from '../services/task.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList = [];

  constructor(private tasksService: TasksService) {
    tasksService.getTaskListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
   }

  ngOnInit(): void {
  }

  remove(task: string){
    this.tasksService.remove(task);
  }

  done(task: string){
    this.tasksService.done(task);
  }

  getColor(): string{
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
