import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoListService } from '../todo-list.service/todo-list.service';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['todo-list.component.css'],
    providers: [ToDoListService]
})

export class ToDoListComponent implements OnInit{
    public arrayOfItems: string[] = [];

    constructor(private _listService: ToDoListService) {}



    addToList(value: string) {
        this._listService.addItem(value);
    }

    removeListItem(todo: any){
        this._listService.deleteItem(todo);
    }

    ngOnInit() {
        this.arrayOfItems = this._listService.arrayOfItems;
    }
}