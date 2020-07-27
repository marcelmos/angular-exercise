import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {

  tasksDone: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    tasksService.getTaskDoneObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks;
    });
   }

  ngOnInit(): void {
  }

}
