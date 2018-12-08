import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from '../components/app.component/app.components';
import { ToDoListComponent }   from '../components/todo-list.component/todo-list.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ToDoListComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }