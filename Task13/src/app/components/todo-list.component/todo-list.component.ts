import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoListService } from '../todo-list.service/todo-list.service';
import { DragAndDropService } from '../drag-and-drop.service/drag-and-drop.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['todo-list.component.css'],
    providers: [ToDoListService, DragAndDropService]
})

export class ToDoListComponent implements OnInit{
    public arrayOfItems: string[] = [];
    public arrayOfNumbers: number[] = [1,2,3,4,5,6,7,8,9,10];

    constructor(private _listService: ToDoListService, private _dnd: DragAndDropService) {}

    addToList(value: string) {
        this._listService.addItem(value);
    }

    removeListItem(todo: string){
        this._listService.deleteItem(todo);
    }

    dragIt(ev: any) {
        this._dnd.drop(ev);
    }

    ngOnInit() {
        this.arrayOfItems = this._listService.arrayOfItems;
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.arrayOfItems, event.previousIndex, event.currentIndex);
    }
}