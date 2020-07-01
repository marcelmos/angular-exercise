import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  add(){
    this.tasksService.add(this.newTask);
    this.newTask = '';
  }
}
