import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {FormsModule} from '@angular/forms';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TaskDoneComponent } from './task-done/task-done.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    TaskDoneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }