import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewTodoComponent} from './view-todo.component';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [ViewTodoComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  entryComponents: [ViewTodoComponent],
  exports: [
    ViewTodoComponent
  ],
  bootstrap: [ViewTodoComponent]
})
export class ViewTodoModule {
}
