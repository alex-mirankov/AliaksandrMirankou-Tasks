import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';

import { AppComponent }   from '../components/app.component/app.components';
import { ToDoListComponent }   from '../components/todo-list.component/todo-list.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DemoMaterialModule,
        HttpClientModule,
        MatNativeDateModule,
        ReactiveFormsModule,
      ],
      entryComponents: [ ToDoListComponent ],
      declarations: [AppComponent, ToDoListComponent],
      bootstrap: [AppComponent],
})
export class AppModule { }