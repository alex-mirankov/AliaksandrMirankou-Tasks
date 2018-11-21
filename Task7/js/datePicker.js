class DatePicker {
    onFocusDatePicker() {
        objectDOM.main.style.visibility = "visible";
    }

    getValue() {
        var result = document.getElementById('inputDate');
        result.value = this.value + "/" + (objectDate.currentMonth + 1) + "/" + objectDate.currentYear;
    }

    logicDatePicker() {
        var containerNumbers_content__class = document.getElementsByClassName("containerNumbers_content");
        for(var i = 0; i < containerNumbers_content__class.length; i++) {
            containerNumbers_content__class[i].onclick = datePicker.getValue;
        }
    }
}