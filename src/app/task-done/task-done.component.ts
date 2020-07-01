import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/task.service';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {

  tasksDone: Array<string> = [];

  constructor(private tasksService: TasksService) {
    tasksService.getTaskDoneObs().subscribe((tasks: Array<string>) => {
      this.tasksDone = tasks;
    });
   }

  ngOnInit(): void {
  }

}
