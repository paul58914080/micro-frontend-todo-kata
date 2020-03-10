import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewTodoComponent} from './view-todo.component';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {createCustomElement} from '@angular/elements';


@NgModule({
  declarations: [ViewTodoComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  entryComponents: [ViewTodoComponent],
  exports: [ViewTodoComponent],
  bootstrap: environment.loadBootstrap ? [ViewTodoComponent] : []
})
export class ViewTodoModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const viewTodoElement = createCustomElement(ViewTodoComponent, { injector: this.injector });
    customElements.define('view-todo-element', viewTodoElement);
  }
}
