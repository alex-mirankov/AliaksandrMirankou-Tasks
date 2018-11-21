class UI {
    renderCalendar() {
        objectDOM.main.className = "main";
        objectDOM.main.style.backgroundColor = "#ADD8E6";
        objectDOM.main.style.width = "400px";
        objectDOM.main.style.height = "200px";
        objectDOM.main.style.borderRadius = "20px";
        objectDOM.main.style.visibility = "hidden";
        objectDOM.main.style.padding = "10px";

        objectDOM.containerNumbers.className = "containerNumbers";

        var navigation = document.createElement('div');
        navigation.className = "navigation";
        navigation.style.textAlign = "center";
        navigation.style.paddingTop = "10px";

        objectDOM.navigation_month.textContent = objectArrays.monthNamesArray[objectDate.currentMonth];
        objectDOM.navigation_month.style.fontSize = "20px";
        objectDOM.navigation_month.className = "navigation_month";

        var navigation_button_left = document.createElement('button');
        navigation_button_left.id = "navigation_button_left";
        navigation_button_left.style.border = "none";
        navigation_button_left.style.background = "inherit";
        navigation_button_left.textContent = "<";

        var navigation_button_right = document.createElement('button');
        navigation_button_right.id = "navigation_button_right";
        navigation_button_right.style.border = "none";
        navigation_button_right.style.background = "inherit";
        navigation_button_right.textContent = ">"

        document.body.appendChild(objectDOM.main);
        objectDOM.main.appendChild(navigation);
        navigation.appendChild(navigation_button_left);
        navigation.appendChild(objectDOM.navigation_month);
        navigation.appendChild(navigation_button_right);

        var weekDays = document.createElement('div');
        weekDays.className = "weekDays";

        var weekDays_container = document.createElement('div');
        weekDays_container.className = "weekDays_container";
        weekDays_container.style.display = "flex";
        weekDays_container.style.justifyContent = "space-between";
        weekDays.appendChild(weekDays_container);
        objectDOM.main.appendChild(weekDays); 

        for (var i = 0; i < 7; i++) {
            var tdDaysArray = [];
            var weekDays_content = document.createElement('div');

            weekDays_content.className = "weekDays_content";
            tdDaysArray[i] = document.createElement('div');
            tdDaysArray[i].appendChild(document.createTextNode(objectArrays.weekDaysArray[i]));
            weekDays_content.appendChild(tdDaysArray[i]);
            weekDays_container.appendChild(weekDays_content);
        }
    }

    renderOtherMonth(currentMonth) {
        var countDays = objectArrays.mountDatesArray[currentMonth];
        var count = 0;
        var newDate = new Date(objectDate.currentYear, currentMonth);
        var firstDay = newDate.getDay();

        objectDOM.navigation_month.textContent = objectArrays.monthNamesArray[currentMonth];
        for (var i = 0; i < 6; i++) {
            var containerNumbers_row = document.createElement("div");
            containerNumbers_row.className = "containerNumbers_row";
            ui.stylesDivDaysContainer(containerNumbers_row);
            for (var j = 0; j < 7; j++) {
                if(i===0 && j >= firstDay) {
                    var containerNumbers_content = document.createElement("input");
                    containerNumbers_content.className = "containerNumbers_content";
                    containerNumbers_content.id = "containerNumbers_content"+j+i;
                    ui.stylesCalendarDays(containerNumbers_content);
                    ui.calendarDaysCounter(containerNumbers_content, newDate);
                    containerNumbers_row.appendChild(containerNumbers_content);
                    count++;
                } else if(i === 0) {
                    var containerNumbers_content = document.createElement("input");
                    containerNumbers_content.id = "containerNumbers_content"+j+i;
                    ui.stylesCalendarDays(containerNumbers_content);
                    containerNumbers_content.value = " ";
                    containerNumbers_row.appendChild(containerNumbers_content);
                }
                for(var k = 1; k < 6; k++) {
                    if(i === k && count < countDays){
                        var containerNumbers_content = document.createElement("input");
                        containerNumbers_content.id = "containerNumbers_content"+j+i;
                        ui.stylesCalendarDays(containerNumbers_content);
                        ui.calendarDaysCounter(containerNumbers_content, newDate);
                        containerNumbers_row.appendChild(containerNumbers_content);
                        count++;
                    } else if(i === k && count >= countDays) {
                        var containerNumbers_content = document.createElement("input");
                        containerNumbers_content.id = "containerNumbers_content"+j+i;
                        ui.stylesCalendarDays(containerNumbers_content);
                        containerNumbers_content.value = " ";
                        containerNumbers_row.appendChild(containerNumbers_content);
                    }
                }
                if (String(objectDOM.navigation_month.textContent) === String(objectArrays.monthNamesArray[currentMonth])
                    && Number((containerNumbers_content.value)) === Number(objectDate.currentDay)) {
                    ui.currentDate(objectDOM.navigation_month, containerNumbers_content);
                }
                containerNumbers_row.appendChild(containerNumbers_content);
            }
            objectDOM.containerNumbers.appendChild(containerNumbers_row)
            objectDOM.main.appendChild(objectDOM.containerNumbers);
        }
        datePicker.logicDatePicker();
    }

    stylesDivDaysContainer(containerNumbers_row) {
        containerNumbers_row.style.display = "flex";
        containerNumbers_row.style.justifyContent = "space-between";
    }

    stylesCalendarDays(containerNumbers_content) {
        containerNumbers_content.type = "button";
        containerNumbers_content.className = "containerNumbers_content";
        containerNumbers_content.style.width = "30px";
        containerNumbers_content.style.textAlign = "center";
        containerNumbers_content.style.backgroundColor = "inherit";
        containerNumbers_content.style.border = "none";
        containerNumbers_content.style.textAlign = "center";
        containerNumbers_content.style.fontSize = "16px";
        containerNumbers_content.style.outline = "none";
        containerNumbers_content.style.cursor = "pointer";
    }

    calendarDaysCounter(containerNumbers_content, newDate) {
        containerNumbers_content.value = newDate.getDate();
        newDate.setDate(newDate.getDate() + 1);
    }

    currentDate(navigation_month, containerNumbers_content) {
        navigation_month.style.color = "white";
        containerNumbers_content.style.color = "white";
    }
}