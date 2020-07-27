import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {FormsModule} from '@angular/forms';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TaskDoneComponent } from './task-done/task-done.component';
import { TasksService } from './services/task.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    TaskDoneComponent,
    CheckedDirective,
    DateDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
