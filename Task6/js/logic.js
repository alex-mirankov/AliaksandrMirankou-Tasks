class Logic {
    prevButton() {
        if (objectDate.currentMonth > 0) {
            objectDOM.navigation_month.textContent = objectArrays.monthNamesArray[objectDate.currentMonth];
            objectDate.currentMonth--;
            logic.clearCalendar();
            ui.renderOtherMonth(objectDate.currentMonth);
        } else {
            objectDOM.navigation_month.textContent = objectArrays.monthNamesArray[objectDate.currentMonth];
            objectDate.currentMonth = 11;
            logic.clearCalendar();
            ui.renderOtherMonth(objectDate.currentMonth);
        }
    };
    
    nextButton() {
        if (objectDate.currentMonth < 11) {
            objectDOM.navigation_month.textContent = objectArrays.monthNamesArray[objectDate.currentMonth];
            logic.clearCalendar();
            objectDate.currentMonth++;
            ui.renderOtherMonth(currentMonth);
        } else {
            objectDOM.navigation_month.textContent = objectArrays.monthNamesArray[objectDate.currentMonth];
            logic.clearCalendar();
            objectDate.currentMonth = 0;
            ui.renderOtherMonth(objectDate.currentMonth);
        }
    };
    
    clearCalendar() {
        for (var i = 0; i <= 5; i++) {
            objectDOM.containerNumbers.removeChild(objectDOM.containerNumbers.childNodes[0]);
            objectDOM.navigation_month.style.color = "black";
        }
    }
}