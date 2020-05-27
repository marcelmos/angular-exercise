import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {

  @Input()
  completedTaskList: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
