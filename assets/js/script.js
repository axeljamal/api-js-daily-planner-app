const currentDay = $("#currentDay");
const scheduler = $(".container");
let hours = { start: 9, end: 17 };

// Display current day time function

function displayTime() {
  let today = moment().format("dddd, MMMM Do");
  currentDay.text(today);
}

displayTime();

// Logic to display the elements on the screen



for (let i = hours.start; i <= hours.end; i++) {
  // create textAreaBlock <div> element with class of text-block
  let textAreaBlock = $("div").attr("class", "text-block");
  // Append to scheduler
  scheduler.append(textAreaBlock);

  //Hour <span> element
  let hour = $("<span>");

  //Text area element
  let textArea = $("textarea>");
  textArea = $("<textarea aria-label='save-button'>");
  textArea.attr("id", i);
  textArea.val(localStorage.getItem(i));

  //Button
  let button = $("</button>").attr("class", "saveBtn");
  button.attr("data-hour", i);
  button.html("<i class='fas  fa-save'></i>");
  //Even listener for saveStorage
  button.on("click", saveStorage);
  
  let hoursBlock = moment(`2023-01-01T${i < 10 ? "0" + i : i}:00:00).format("ha");
  textAreaBlock.append(hour).html(`<span class="hour">${hoursBlock}</span>`)
  textAreaBlock.append(textArea);
  textAreaBlock.append(button);
  

  
}
