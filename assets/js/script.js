const currentDay = $("#currentDay");

// Display current day time function

function displayTime() {
  let today = moment().format("dddd, MMMM Do");
  currentDay.text(today);
}

displayTime();
