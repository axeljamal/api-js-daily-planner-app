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

  //Button
  let btnSave = $("</button arias-label='save-button'>");
  btnSave.addClass("saveBtn");
  btnSave.attr("data-hour", i);
  btnSave.html("<i class='fas  fa-save'></i>");
  //Even listener for saveStorages
  btnSave.on("click", saveBtnHandler);

  //Hour <span> element
  let label = $("<span>");

  //Text area element
  let textArea = $("<textarea aria-label='event'>");
  textArea.attr("id", i);
  textArea.val(localStorage.getItem(i));

  let hourDisplay = moment(`2023-01-01T${i < 10 ? "0" + i : i}:00:00`).format(
    "ha"
  );
  textAreaBlock.append(label).html(`<span class="hour">${ho}</span>`);
  textAreaBlock.append(textarea);
  textAreaBlock.append(btnSave);

  let timeCurrent = moment().format("H");

  // Conditional for color background display
  if (i < timeCurrent) {
    textarea.addClass("past");
  } else if (i <= timeCurrent) {
    textarea.addClass("present");
  } else {
    textarea.addClass("future");
  }
}
