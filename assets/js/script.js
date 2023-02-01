const currentDay = $("#currentDay");
const scheduler = $(".container");

// Display current day time function

function displayTime() {
  let today = moment().format("dddd, MMMM Do HH:mm A ");
  currentDay.text(today);
}

displayTime();

// Loop to display the hour elements on the screen
let hours = { start: 9, end: 17 };

for (let i = hours.start; i <= hours.end; i++) {
  // create textAreaBlock <div> element with class of text-block
  let textAreaBlock = $("<div>").attr("class", "text-block");
  // Append to scheduler
  scheduler.append(textAreaBlock);

  //Button
  let btnSave = $("<button arias-label='save-button'/>");
  btnSave.addClass("saveBtn");
  btnSave.attr("data-hour", i);
  btnSave.html("<i class='fas  fa-save'></i>");
  //Even listener for saveStorage
  btnSave.on("click", saveStorage);

  //Hour <span> element
  let label = $("<span>");

  //Text area element for accessability
  let textArea = $("<textarea aria-label='event'>");
  textArea.attr("id", i);
  textArea.val(localStorage.getItem(i));

  let hourDisplay = moment(`2023-01-01T${i < 10 ? "0" + i : i}:00:00`).format(
    "hA"
  );
  textAreaBlock.append(label).html(`<span class="hour">${hourDisplay}</span>`);
  textAreaBlock.append(textArea);
  textAreaBlock.append(btnSave);

  let timeCurrent = moment().format("H");

  // Conditional for color background display
  if (i < timeCurrent) {
    textArea.addClass("past");
  } else if (i <= timeCurrent) {
    textArea.addClass("present");
  } else {
    textArea.addClass("future");
  }
}
// Function that handle the saving to local storage
function saveStorage(e) {
  let button = $(e.currentTarget);
  let hour = button.attr("data-hour");
  let textarea = $(`#${hour}`);

  if (textarea.val().trim() === "") {
    localStorage.removeItem(hour);
  } else {
    localStorage.setItem(hour, textarea.val());
    displaySavedMessage();
  }
}
// Function that handle display saved message
function displaySavedMessage() {
  const displayMessage = $("#saved-message");
  displayMessage.toggleClass("hideMessage");
  setTimeout(() => {
    displayMessage.toggleClass("hideMessage");
  }, 2000);
}
