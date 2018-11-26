var date = new Date();

var objectDate = {
    currentDay: date.getDate(),
    currentYear: date.getFullYear(),
    currentMonth: date.getMonth()
};

var objectArrays = {
    monthNamesArray: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    mountDatesArray: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    weekDaysArray: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};

var objectDOM = {
    main: document.createElement('div'),
    navigation_month: document.createElement('span'),
    containerNumbers_row: document.createElement("div"),
    containerNumbers: document.createElement('div')
};

var ui = new UI();
var logic = new Logic();
ui.renderCalendar();
ui.renderOtherMonth(objectDate.currentMonth);

document.getElementById('navigation_button_left').onclick = logic.prevButton;
document.getElementById('navigation_button_right').onclick = logic.nextButton;