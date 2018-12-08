import { Injectable } from "@angular/core";

@Injectable()
export class ToDoListService {
    public arrayOfItems: string[] = [];

    addItem(value: string) {
        this.arrayOfItems.push(value);
    }

    deleteItem(todo: any){
        for(let i=0 ;i<= this.arrayOfItems.length ;i++){
            if(todo == this.arrayOfItems[i]){
                this.arrayOfItems.splice(i,1)
            }
        }
    }
}