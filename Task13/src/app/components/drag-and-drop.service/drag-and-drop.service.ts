import { Injectable } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable()
export class DragAndDropService {
    public arrayOfItems: string[] = [];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.arrayOfItems, event.previousIndex, event.currentIndex);
    }
}