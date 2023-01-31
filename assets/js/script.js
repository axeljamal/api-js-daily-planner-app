const currentDay = $("#currentDay");
const scheduler = $(".container");

// Display current day time function

function displayTime() {
  let today = moment().format("dddd, MMMM Do");
  currentDay.text(today);
}

displayTime();

// create textAreaBlock <div> element with class of text-block
let textAreaBlock = $("div").attr("class", "text-block");
// Append to scheduler
scheduler.append(textAreaBlock);

//Hour <span> element
let hour = $("<span>").attr("class", "hour");
//Text area element
let textArea = $("textarea>");

//Button
let button = $("</button>").attr("class", "saveBtn");
