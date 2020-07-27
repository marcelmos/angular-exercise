import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TasksService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    console.log('TodoTaskComponent');
    this.tasksService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    });
   }

  ngOnInit(): void {
  }

  remove(task: Task){
    this.tasksService.remove(task);
  }

  done(task: Task){
    task.end = new Date();
    this.tasksService.done(task);
  }

  getColor(): string{
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
