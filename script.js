//the current day is displayed at the top of the calendar
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');

var currentDayEl = $("#currentDay")

currentDayEl.text(currentDay)

var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);

var hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

$(".saveBtn").on("click", function () {
    var currentDayEl = $("#currentDay").val().trim();
    localStorage.setItem('currentDay', JSON.stringify(currentDayEl));
})
document.getElementById("hour9").innerHTML = localStorage.getItem("hours");


//Array.from(hours).forEach(row => {
//    let
//        rowIdString = row.id,
//        rowHour;
//    if (rowIdString) {
//        rowHour = parseInt(rowIdString);
//    }
//    if (rowHour) {

//        if (currentDayEl === rowHour) {
//            setColor(row, "red");
//        } else if ((currentDayEl < rowHour) && (currentHour > rowHour - 6)) {
//            setColor(row, "green");
//        } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//            setColor(row, "lightgrey");
//        } else {
//            setColor(row, "white");
//        }
//    }
//});
