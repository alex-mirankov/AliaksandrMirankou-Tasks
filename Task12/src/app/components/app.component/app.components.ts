import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {

    public arrayOfItems: string[] = [];
    constructor() {

    }

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