import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from './create-todo.component';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [CreateTodoComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  entryComponents: [CreateTodoComponent],
  bootstrap: [CreateTodoComponent]
})
export class CreateTodoModule { }
